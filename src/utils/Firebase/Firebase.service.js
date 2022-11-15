import { collection, getDocs } from "firebase/firestore/lite";
import { state } from "./components/state";

// Get info and content  from database
export async function GetContent(db) {
  const musicCol = collection(db, "music");
  const photosCol = collection(db, "photos");
  const wordsCol = collection(db, "words");
  const infoCol = collection(db, "info");
  const musicSnapshot = await getDocs(musicCol);
  const photosSnapshot = await getDocs(photosCol);
  const wordsSnapshot = await getDocs(wordsCol);
  const infoSnapshot = await getDocs(infoCol);
  state.music = musicSnapshot.docs.map((doc) => doc.data());
  state.photos = photosSnapshot.docs.map((doc) => doc.data());
  state.words = wordsSnapshot.docs.map((doc) => doc.data());
  state.info = infoSnapshot.docs.map((doc) => doc.data());
}
