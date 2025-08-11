import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWrYwp5l3eqeYKQfWgX-sw637KuspfceA",
  authDomain: "ia-web-552f2.firebaseapp.com",
  projectId: "ia-web-552f2",
  storageBucket: "ia-web-552f2.firebasestorage.app",
  messagingSenderId: "993362028279",
  appId: "1:993362028279:web:0ce76f95802aa8cf9315f2",
  measurementId: "G-TFT70W6VV1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { analytics, db, auth };
