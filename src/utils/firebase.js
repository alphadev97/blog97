// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-a0e82.firebaseapp.com",
  projectId: "blog-a0e82",
  storageBucket: "blog-a0e82.appspot.com",
  messagingSenderId: "300396226596",
  appId: "1:300396226596:web:d085c77b846dd68e8a90b1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
