// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBe_yL2Jkod7ykAFS7oRkKX7enetNEUKWc",
    authDomain: "tracker-715f7.firebaseapp.com",
    projectId: "tracker-715f7",
    storageBucket: "tracker-715f7.appspot.com",
    messagingSenderId: "924257568590",
    appId: "1:924257568590:web:e1b8bcadeae7adbb5fc01f",
    measurementId: "G-D2L2ZTP7Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { provider, auth };