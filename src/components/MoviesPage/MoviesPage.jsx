import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovie } from 'services/api';
import { BiSearchAlt } from 'react-icons/bi';

import {
  Film,
  FilmLink,
  FilmDescriptionContainer,
  FilmRating,
  FilmTitle,
} from '../HomePage/HomePage.styled';
import {
  MoviePageList,
  SearchInput,
  SearchButton,
  InputLabel,
  Form,
} from './MoviePage.styled';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useSearchParams('');
  const [inputQuery, setInputQuery] = useState('');
  const [responseFilm, setResponseFilm] = useState([]);

  const location = useLocation();
  console.log('searchQuery.get(`query`)', searchQuery.get('query'));
  console.log('location:', location);

  useEffect(() => {
    if (!searchQuery.get('query')) {
      return;
    }
    fetchMovie(searchQuery.get('query')).then(({ results }) => {
      console.log(results);
      setResponseFilm(results);
    });
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputQuery);
    if (inputQuery === '') {
      console.log('pusto');
      return;
    }
    setSearchQuery({ query: inputQuery });
    setInputQuery('');
  };

  const handleInputEvent = event => {
    const { value } = event.currentTarget;
    setInputQuery(value);
  };
  return (
    <>
      <Form action="" onSubmit={handleSubmit}>
        <InputLabel>
          <SearchInput type="text" name="query" onChange={handleInputEvent} />
        </InputLabel>
        <SearchButton type="submit">
          <BiSearchAlt size={24} />
        </SearchButton>
      </Form>
      {responseFilm.length > 0 && (
        <>
          <MoviePageList>
            {responseFilm.map(searchFilm => (
              <Film key={searchFilm.id}>
                <FilmLink
                  to={`/movies/${searchFilm.id}`}
                  state={{ from: location.pathname }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${searchFilm.poster_path}`}
                    alt={searchFilm.title}
                    width="100%"
                  />
                  <FilmDescriptionContainer>
                    <FilmTitle>{searchFilm.title}</FilmTitle>
                    <FilmRating>{searchFilm.vote_average}</FilmRating>
                  </FilmDescriptionContainer>
                </FilmLink>
              </Film>
            ))}
          </MoviePageList>
        </>
      )}
      <Outlet />
    </>
  );
};

export default MoviesPage;

// const MoviesPage = () => {
//   const [inputQuery, setInputQuery] = useState('');
//   const [submitQuery, setSubmitQuery] = useState('');
//   const [responseFilm, setResponseFilm] = useState([]);

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!submitQuery) {
//       return;
//     }
//     fetchMovie(submitQuery).then(({ results }) => {
//       console.log(results);
//       setResponseFilm(results);
//       setSubmitQuery(submitQuery);
//     });
//   }, [submitQuery]);

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(inputQuery);
//     if (inputQuery === '') {
//       console.log('pusto');
//       return;
//     }
//     setSubmitQuery(inputQuery);
//     navigate({
//       pathname: location.pathname,
//       search: `query=${inputQuery}`,
//     });
//     console.log(submitQuery);
//     console.log(location);
//   };

//   const handleInputEvent = event => {
//     const { value } = event.currentTarget;
//     setInputQuery(value);
//   };
//   return (
//     <>
//       <form action="" onSubmit={handleSubmit}>
//         <label>
//           <input type="text" name="query" onChange={handleInputEvent} />
//         </label>
//         <button type="submit">search</button>
//       </form>
//       {submitQuery && (
//         <>
//           <ul>
//             {responseFilm.map(searchFilm => (
//               <li key={searchFilm.id}>
//                 {/* <Link to={`${searchFilm.id}` }> */}
//                 <Link
//                   to={`${searchFilm.id}`}
//                   state={{ from: location.pathname }}
//                 >
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500/${searchFilm.poster_path}`}
//                     alt=""
//                   />
//                   <p>{searchFilm.title}</p>
//                   <p>{searchFilm.vote_average}</p>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//       <Outlet />
//     </>
//   );
// };
