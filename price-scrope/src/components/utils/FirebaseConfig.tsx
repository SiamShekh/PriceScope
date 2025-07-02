// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi3p0SvsjRjWT0r2ipNGjGtaldhAleJAg",
    authDomain: "pricescope-80e31.firebaseapp.com",
    projectId: "pricescope-80e31",
    storageBucket: "pricescope-80e31.firebasestorage.app",
    messagingSenderId: "803841198966",
    appId: "1:803841198966:web:cc40dc3c079858a0d64857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
