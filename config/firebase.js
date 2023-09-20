// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABx0N3Y8jHFKDol8QKJRLupcAGFhNY9q0",
  authDomain: "social-app-59913.firebaseapp.com",
  projectId: "social-app-59913",
  storageBucket: "social-app-59913.appspot.com",
  messagingSenderId: "686845072468",
  appId: "1:686845072468:web:268774c3e0cdee265049c1",
  measurementId: "G-S70TDBR0TW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;

// Initialize Firebase storage and firestore
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
