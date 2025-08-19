import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your Firebase config from console
const firebaseConfig = {
  apiKey: "AIzaSyDhY2kklwvjRmEY88U5Dg0jefsDKPKUPJM",
  authDomain: "galleryapp-13457.firebaseapp.com",
  projectId: "galleryapp-13457",
  storageBucket: "galleryapp-13457.firebasestorage.app",
  messagingSenderId: "534527812723",
  appId: "1:534527812723:web:63df29471f474dbbef3606",
  measurementId: "G-E83RP4EHK6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
