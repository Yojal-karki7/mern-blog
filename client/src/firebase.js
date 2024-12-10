// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bc319.firebaseapp.com",
  projectId: "mern-blog-bc319",
  storageBucket: "mern-blog-bc319.firebasestorage.app",
  messagingSenderId: "821748411936",
  appId: "1:821748411936:web:8e562f1bfe0e337a539645"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

