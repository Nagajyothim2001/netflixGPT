// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIRaac6sT3lUhUO7xedmDN2-PikDo6SqQ",
  authDomain: "netflixgpt-d4c0a.firebaseapp.com",
  projectId: "netflixgpt-d4c0a",
  storageBucket: "netflixgpt-d4c0a.firebasestorage.app",
  messagingSenderId: "493187569779",
  appId: "1:493187569779:web:18cb88730175436133f206",
  measurementId: "G-E7ELTYC9VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);