import React from 'react';
import propTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, toggleModal, modalImage }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          largeImage={largeImageURL}
          smalImage={webformatURL}
          toggleModal={toggleModal}
          modalImage={modalImage}
          key={id}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      largeImageURL: propTypes.string.isRequired,
      webformatURL: propTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: propTypes.func.isRequired,
  modalImage: propTypes.func.isRequired,
};

export default ImageGallery;
