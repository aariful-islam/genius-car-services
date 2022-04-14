// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1W3-oSsbT61Vh-F8FiEMwcpx77NfCsoE",
  authDomain: "genus-car-services.firebaseapp.com",
  projectId: "genus-car-services",
  storageBucket: "genus-car-services.appspot.com",
  messagingSenderId: "701985923528",
  appId: "1:701985923528:web:b5ad1c25bd166445d560fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;