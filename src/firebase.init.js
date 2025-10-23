// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmF8i_KSHTqAqqFP-G-UGfTZ2gjWsikrY",
  authDomain: "my-assignment-9-6c2e8.firebaseapp.com",
  projectId: "my-assignment-9-6c2e8",
  storageBucket: "my-assignment-9-6c2e8.firebasestorage.app",
  messagingSenderId: "429182817410",
  appId: "1:429182817410:web:7a70f1597555f7dc8c509b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);