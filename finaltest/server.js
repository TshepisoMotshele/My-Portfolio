// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAD1iXi42dokO_BXE9sMUptONPubNMfHE",
  authDomain: "tshepiso-motshele-portfolio.firebaseapp.com",
  projectId: "tshepiso-motshele-portfolio",
  storageBucket: "tshepiso-motshele-portfolio.appspot.com",
  messagingSenderId: "671885055181",
  appId: "1:671885055181:web:bd6dcfabebfa5f2b520584",
  measurementId: "G-1GPSSM1EZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);