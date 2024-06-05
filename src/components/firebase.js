import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8QyaYp0weuzSdajI8A77OrAGG7oM9gAM",
  authDomain: "toddler-learning-7f62f.firebaseapp.com",
  projectId: "toddler-learning-7f62f",
  storageBucket: "toddler-learning-7f62f.appspot.com",
  messagingSenderId: "735189090172",
  appId: "1:735189090172:web:a5dbb21e80c2f8e698eef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);