import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movieId, 'reviews').then(({ results }) => {
      setFilmReviews(results);
    });
  }, [movieId]);
  console.log(filmReviews);
  return (
    <>
      {filmReviews.length > 0 ? (
        <>
          <ul>
            {filmReviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No review! :(</p>
      )}
    </>
  );
};

export default Reviews;
