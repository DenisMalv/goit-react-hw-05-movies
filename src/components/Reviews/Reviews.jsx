import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [filmReviews, setFilmReviews] = useState(null);
  useEffect(() => {
    fetchMovieDetails(movieId, 'reviews').then(({ results }) => {
      console.log(results);
      setFilmReviews(results);
    });
  }, [movieId]);
  console.log(movieId);
  console.log(filmReviews);

  return (
    <>
      {filmReviews && (
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
      )}
      {filmReviews && <p>No review! :(</p>}
    </>
  );
};

export default Reviews;
