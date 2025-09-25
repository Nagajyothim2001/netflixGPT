import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAIRaac6sT3lUhUO7xedmDN2-PikDo6SqQ",
  authDomain: "netflixgpt-d4c0a.firebaseapp.com",
  projectId: "netflixgpt-d4c0a",
  storageBucket: "netflixgpt-d4c0a.firebasestorage.app",
  messagingSenderId: "493187569779",
  appId: "1:493187569779:web:18cb88730175436133f206",
  measurementId: "G-E7ELTYC9VF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();