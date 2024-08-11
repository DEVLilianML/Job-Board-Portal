// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5e1cAHNSmBUl41eQuLsdWLSGvQU1x_tk",
  authDomain: "job-portal-demo-28cea.firebaseapp.com",
  projectId: "job-portal-demo-28cea",
  storageBucket: "job-portal-demo-28cea.appspot.com",
  messagingSenderId: "265589710864",
  appId: "1:265589710864:web:8eacfff031a801c152ea95",
  measurementId: "G-GJZY7CL77E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app