
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfic = {

  // apiKey: "AIzaSyAvobOXu4-83xXMvXbg16NrYJFVWwFlJmM",
  // authDomain: "shopswiftly-1c832.firebaseapp.com",
  // projectId: "shopswiftly-1c832",
  // storageBucket:"shopswiftly-1c832.appspot.com",
  // messagingSenderId:"93854030821",
  // appId:"1:93854030821:web:6c39e50c701d711b0eed0c"


  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
     
    

};

// Initialize Firebase
const app = initializeApp(firebaseConfic);
const auth = getAuth(app);
export default auth