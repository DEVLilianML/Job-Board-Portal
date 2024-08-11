import React from 'react'
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getAuth} from "firebase/auth";
import app from "../Firebase/Firebase.confiq"


const Login = () => {
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const handleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        const user = result.user;

    }).catch((error) => {
        const errorMessage = error.message;
        const email = error.customDate.email;
        const credential = GoogleAuthProvider.credentialFromError(Error);
    });
}
  return (
    <div className='h-screen w-full flex items-center justify-center' >
       <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>login</button> 
        
    </div>
  )
}

export default Login 