// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbSamEsCqRRXQgcL4DWI2XhR90TOviJ3E",
  authDomain: "cuisine-chronicles.firebaseapp.com",
  projectId: "cuisine-chronicles",
  storageBucket: "cuisine-chronicles.appspot.com",
  messagingSenderId: "222987590676",
  appId: "1:222987590676:web:9598c2da503580973cdb01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;