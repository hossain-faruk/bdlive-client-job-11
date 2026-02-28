import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtKaFpNKQ5OIiRoEmHMt0HzpAD-qhnAN8",
  authDomain: "bdlive-newtv.firebaseapp.com",
  projectId: "bdlive-newtv",
  storageBucket: "bdlive-newtv.firebasestorage.app",
  messagingSenderId: "337137184226",
  appId: "1:337137184226:web:474e9d015d276434b99dbb",
};

// অ্যাপটি একবারই ইনিশিয়ালাইজ করার জন্য এই লজিক
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
