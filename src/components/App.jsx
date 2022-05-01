import { useState, useEffect } from 'react';
import { MainContainer } from './App.styled.js';

import Searchbar from './Searchbar/Searchbar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import galleryApi from '../services/image-gallery-api';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [queryResponponce, setQueryResponse] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    if (page === 1) {
      setQueryResponse([]);
    }
    setStatus('pending');
    galleryApi
      .fetchImages(query, page)
      .then(({ hits }) => {
        const smallHits = galleryApi.smallFetchResponse(hits);
        setQueryResponse(prevQueryResponponce => [
          ...prevQueryResponponce,
          ...smallHits,
        ]);
        setStatus('resolved');
        window.scrollBy({
          top: document.body.clientHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
  };
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleModalLargeImage = image => {
    setModalImage(image);
  };

  return (
    <MainContainer>
      <Searchbar>
        <SearchForm onSubmit={handleSubmit} />
      </Searchbar>
      {queryResponponce.length !== 0 && (
        <ImageGallery
          images={queryResponponce}
          toggleModal={toggleModal}
          modalImage={handleModalLargeImage}
        />
      )}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <Button nextPage={handleLoadMore} />}
      {showModal && <Modal onClose={toggleModal} largeImage={modalImage} />}
    </MainContainer>
  );
};

export default App;
