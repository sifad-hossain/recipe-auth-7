// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx8AGh1pQeaz21YRyfqy_O2N8UaJuizW8",
  authDomain: "recipe-auth-7.firebaseapp.com",
  projectId: "recipe-auth-7",
  storageBucket: "recipe-auth-7.appspot.com",
  messagingSenderId: "805683881530",
  appId: "1:805683881530:web:fefb656e0643048835f703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)