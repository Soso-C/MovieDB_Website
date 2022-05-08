import axios from "axios";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase.config";

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

// get Favorite movies from Firebase
export async function getFavoriteMovies(uid) {
  const querySnapshot = await getDocs(collection(db, "users"));
  const docList = [];
  // doc.data() is never undefined for query doc snapshots
  querySnapshot.forEach((doc) => {
    docList.push({
      userId: doc.data().userid,
      favoriteMovies: doc.data().favoriteMovies,
    });
  });
  const result = docList.filter((user) => user.userId === uid);
  return result;
}


// export async function addFavoriteMovie(uemail) {
//   const movieLike = doc(db, "users", uemail)
// }

// export async function getFavoriteMovies2(uemail) {
//   onSnapshot(doc(db, "users", uemail))
// }

// Fetch Query Movies
export async function getQueryMovies(urlEndpoint) {
  const moviesResponse = await axios.get(urlEndpoint);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  return moviesResponse.data;
}
