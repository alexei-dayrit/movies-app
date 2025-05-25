console.log("ENV:", import.meta.env.API_KEY);

const API_KEY = import.meta.env.API_KEY;
const BASE_URL = import.meta.env.BASE_URL;

export const getPopularMovies = async () => {
  const repsonse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const repsonse = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
