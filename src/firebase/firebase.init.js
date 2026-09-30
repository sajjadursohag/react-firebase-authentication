// DANGER >>>>>>>>>>>>>>>
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFYdDVPWVqdDMoczcvGifHRNiaVDdwPZQ",
  authDomain: "react-fire-auth-int.firebaseapp.com",
  projectId: "react-fire-auth-int",
  storageBucket: "react-fire-auth-int.firebasestorage.app",
  messagingSenderId: "412196520152",
  appId: "1:412196520152:web:2146346c34339476e597ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);