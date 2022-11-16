import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBjNYt6ZwuLyP1BLhun8a-rzf0ho_I1Bp0",
  authDomain: "daetyas-c1255.firebaseapp.com",
  projectId: "daetyas-c1255",
  storageBucket: "daetyas-c1255.appspot.com",
  messagingSenderId: "652741539944",
  appId: "1:652741539944:web:466f5011b2596dca1ae3dd",
  measurementId: "G-9PSPMBLZP2",
};
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const storage = getStorage(app);
export const db = getFirestore();
