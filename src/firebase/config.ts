import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCwYNoR_pqPMaaWUhRq2-NmtfPGqRyoBrc",
  authDomain: "inferno-verse.firebaseapp.com",
  projectId: "inferno-verse",
  storageBucket: "inferno-verse.firebasestorage.app",
  messagingSenderId: "459868155496",
  appId: "1:459868155496:web:25b6673ed872e0f8cb15dd",
  measurementId: "G-5DB68EF87C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);