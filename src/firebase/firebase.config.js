// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaRu30f1MO1xTFMczk57cwsgirpJG8hD4",
  authDomain: "news-portal-b16c3.firebaseapp.com",
  projectId: "news-portal-b16c3",
  storageBucket: "news-portal-b16c3.appspot.com",
  messagingSenderId: "812477581358",
  appId: "1:812477581358:web:ef8b628771edbb6d5237bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;