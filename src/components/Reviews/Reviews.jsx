import { useParams } from 'react-router-dom';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';

const Reviews = () => {
  const { movieId } = useParams();
  const [filmReviews] = useFetchMovieDetails([], movieId, 'reviews');

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
