import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase.config";

// Get Movies
export async function getMovies(urlEndPoint) {
  const moviesResponse = await axios.get(urlEndPoint);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  return moviesResponse.data.results;
}

export const getMovieById = async (urlEndpoint) => {
  const moviesResponse = await axios.get(urlEndpoint);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  return moviesResponse.data;
};

// const docRef = doc(db, "Users", "Rc8MNcxO6E5oPqbHZmXy");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
// return;

export async function getFavoriteMovies(uid) {
  const querySnapshot = await getDocs(collection(db, "Users"));
  const docList = [];
  // doc.data() is never undefined for query doc snapshots
  querySnapshot.forEach((doc) => {
    docList.push(doc.data().userid, doc.data().favoriteMovie);
  });

  const result = docList.find((el) => el.userid === uid);
  console.log(result);
  console.log(docList);
  return result;
}

// Fetch Query Movies
export async function getQueryMovies(urlEndpoint) {
  const moviesResponse = await axios.get(urlEndpoint);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  return moviesResponse.data;
}
