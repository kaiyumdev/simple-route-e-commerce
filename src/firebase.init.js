// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArazEgkm6TeSJh1gVhp2aN_utoR_PifX0",
  authDomain: "ama-john-simple-488b5.firebaseapp.com",
  projectId: "ama-john-simple-488b5",
  storageBucket: "ama-john-simple-488b5.appspot.com",
  messagingSenderId: "651943336930",
  appId: "1:651943336930:web:5bb52afb8017d4f0c5f7bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;