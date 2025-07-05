import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmBSKyHoMTK8QMCLu36-SKRT0yp-dqlQI",
  authDomain: "ia-app-1d22c.firebaseapp.com",
  projectId: "ia-app-1d22c",
  storageBucket: "ia-app-1d22c.firebasestorage.app",
  messagingSenderId: "1063337353012",
  appId: "1:1063337353012:web:9ea85648d12f4702c04f61",
  measurementId: "G-E1EJKXLP0J"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };