// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider,signInWithPopup} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU2fUzTseRkXHUMhFzEUQYd3-rrvtj85o",
  authDomain: "auth-1c710.firebaseapp.com",
  projectId: "auth-1c710",
  storageBucket: "auth-1c710.appspot.com",
  messagingSenderId: "965414724462",
  appId: "1:965414724462:web:8a858f2f7bb7a9153a577f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();
export let loginData ="";

export const signInWithGoogle = ()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        loginData = result
        
        console.log(result);
        // const name = result.user.displayName;
        // const email = result.user.email;
        // const profilePic = result.user.photoURL;

        // localStorage.setItem("name",name);
        // localStorage.setItem("email",email);
        // localStorage.setItem("profilePic",profilePic);
    })
    .catch((error)=>console.log(error))
}
