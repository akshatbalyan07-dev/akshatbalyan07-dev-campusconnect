// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-8709032453-6476b",
  "appId": "1:1015807881673:web:272e2a0019fd506948b818",
  "apiKey": "AIzaSyAaa0fP0sNESYYCw9Dr71DkROI7cjp2OMc",
  "authDomain": "studio-8709032453-6476b.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "1015807881673"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();


export { app, db, auth, githubProvider };
