import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAnalytics } from "firebase/analytics";
import { state } from './components/state';

const firebaseConfig = {
    apiKey: "${{ secrets.FIREBASE_DAETYAS_C1255_APIKEY5 }}",
    authDomain: "daetyas-c1255.firebaseapp.com",
    projectId: "daetyas-c1255",
    storageBucket: "daetyas-c1255.appspot.com",
    messagingSenderId: "652741539944",
    appId: "1:652741539944:web:466f5011b2596dca1ae3dd",
    measurementId: "G-9PSPMBLZP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get info and content  from database
export async function GetContent(db) {
    const musicCol = collection(db, 'music');
    const photosCol = collection(db, 'photos');
    const infoCol = collection(db, 'info');
    const musicSnapshot = await getDocs(musicCol);
    const photosSnapshot = await getDocs(photosCol);
    const infoSnapshot = await getDocs(infoCol);
    state.music = musicSnapshot.docs.map(doc => doc.data());
    state.photos = photosSnapshot.docs.map(doc => doc.data());
    state.info = infoSnapshot.docs.map(doc => doc.data());
} 