// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// require('dotenv').config();
// console.log(import.meta.env.API_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.API_KEY,
    // authDomain: import.meta.env.AUTH_DOMAIN,
    // projectId: import.meta.env.PROJECT_ID,
    // storageBucket: import.meta.env.STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
    // appId: import.meta.env.APP_ID,

    apiKey: "AIzaSyCgIqXRm1Ai1BdFNpOh0Ukl2HKaf14vaWg",
    authDomain: "emmc-ae9ff.firebaseapp.com",
    projectId: "emmc-ae9ff",
    storageBucket: "emmc-ae9ff.appspot.com",
    messagingSenderId: "11427778174",
    appId: "1:11427778174:web:d67dacd5fefe896f63122f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;