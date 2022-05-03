import axios from 'axios';

async function fetchTrandingMovies() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=6dae1a863e182d2e5c972909bcd1e575&&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchMovie(query) {
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?`;
  const params = {
    params: {
      api_key: '6dae1a863e182d2e5c972909bcd1e575',
      language: `en-US`,
      query: query,
      page: 1,
    },
  };

  const { data } = await axios.get(SEARCH_URL, params);
  return data;
}

async function fetchMovieDetails(movieId, type = '') {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}${
        type ? '/' + type : ''
      }?api_key=6dae1a863e182d2e5c972909bcd1e575&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { fetchTrandingMovies, fetchMovie, fetchMovieDetails };
