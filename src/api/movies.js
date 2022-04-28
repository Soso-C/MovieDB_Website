import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase.config";

export async function getMovies(urlEndPoint) {
  const moviesResponse = await axios.get(urlEndPoint);
  if (!moviesResponse) return "sorry, couldn’t load movies";
  return moviesResponse.data.results;
}

export async function getUser() {
  const docRef = doc(db, "Users", "Rc8MNcxO6E5oPqbHZmXy");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return;
}
