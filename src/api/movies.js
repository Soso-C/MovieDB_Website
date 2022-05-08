import axios from "axios";

// Get Movies
export async function getMovies(urlEndPoint) {
  const moviesResponse = await axios.get(urlEndPoint);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  return moviesResponse.data.results;
}

// get One Movie by ID
export const getMovieById = async (urlEndpoint) => {
  const moviesResponse = await axios.get(urlEndpoint);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  return moviesResponse.data;
};


// Fetch Query Movies
export async function getQueryMovies(urlEndpoint) {
  const moviesResponse = await axios.get(urlEndpoint);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  return moviesResponse.data;
}
