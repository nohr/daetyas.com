import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "${{ secrets.FIREBASE_DAETYAS_C1255_APIKEY5 }}",
  authDomain: "daetyas-c1255.firebaseapp.com",
  projectId: "daetyas-c1255",
  storageBucket: "daetyas-c1255.appspot.com",
  messagingSenderId: "652741539944",
  appId: "1:652741539944:web:466f5011b2596dca1ae3dd",
  measurementId: "G-9PSPMBLZP2",
};
// Initialize Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
