// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCql4WomHj_wXurSrBFRPeglzGrsiiQiOQ",
  authDomain: "auth-integration-c7219.firebaseapp.com",
  projectId: "auth-integration-c7219",
  storageBucket: "auth-integration-c7219.firebasestorage.app",
  messagingSenderId: "293324484648",
  appId: "1:293324484648:web:50e92bcf0a191a8a39451d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);