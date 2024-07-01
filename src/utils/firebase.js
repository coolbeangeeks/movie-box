// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhdFP1ITZcujpAFBtNvTa0GxYs7ImogLo",
  authDomain: "movieboom-a8ae2.firebaseapp.com",
  projectId: "movieboom-a8ae2",
  storageBucket: "movieboom-a8ae2.appspot.com",
  messagingSenderId: "242842423559",
  appId: "1:242842423559:web:f26e3dfe76358372fe75a2",
  measurementId: "G-6T4KHM9WYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();