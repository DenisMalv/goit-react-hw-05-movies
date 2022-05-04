import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
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
  const searchQueryGet = searchQuery.get('query');

  const [inputValue, setInputValue] = useState('');
  const [responseFilm, setResponseFilm] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (!searchQueryGet) {
      // setInputValue('');
      return;
    }
    fetchMovie(searchQueryGet).then(({ results }) => {
      console.log(results);
      setResponseFilm([...results, { query: searchQueryGet }]);
      setInputValue(searchQueryGet);
    });
  }, [searchQueryGet]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const query = form.query.value;
    if (query === '') {
      console.log('pusto');
      return;
    }
    setSearchQuery({ query: query });
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  console.log(searchQuery);
  return (
    <>
      <Form action="" onSubmit={handleSubmit}>
        <InputLabel>
          <SearchInput
            type="text"
            name="query"
            onChange={handleInputChange}
            value={inputValue}
          />
        </InputLabel>
        <SearchButton type="submit">
          <BiSearchAlt size={24} />
        </SearchButton>
      </Form>
      {!searchQueryGet && <p>Please enter search movie text</p>}
      {searchQueryGet && (
        <>
          <MoviePageList>
            {responseFilm.map(searchFilm => (
              <Film key={searchFilm.id}>
                <FilmLink
                  to={`/movies/${searchFilm.id}`}
                  state={{ from: location.pathname + location.search }}
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
