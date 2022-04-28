import axios from "axios";

export async function getMovies(url) {
  const moviesResponse = await axios.get(url);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  else return moviesResponse.data.results;
}
