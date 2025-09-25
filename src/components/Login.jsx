import React, { useRef, useState } from 'react';
import Hearder from './Hearder';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const naviagte = useNavigate()

  const dispatch = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      name.current?.value,
      email.current?.value,
      password.current?.value
    );

    if(message) return;

    //sign in/sign up logic

      if(!isSignInForm) {
        // sign up logic

      createUserWithEmailAndPassword(
      auth, 
      email.current?.value,
      password.current?.value 
    )
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
      displayName: name.current.value,
      photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOfv1543QS1cF3kFJTNRfBhKVWw8yoOdaKA&s"
      }).then(() => {
         const {uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser(
              { uid: uid,
                email: email,
                displayName: displayName,
                photoURL:photoURL }
            ))
        naviagte("/browse")
      }).catch((error) => {
        setErrorMessage(error.message)
      })
      console.log(user)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode +"-" +errorMessage)
    });

      }
      else {
        // sign in logic
        signInWithEmailAndPassword(
          auth, 
          email.current?.value,
          password.current?.value
        )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          naviagte("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          
        });

      }
      
      setErrorMessage(message);
  };

  return (
    <div className="relative min-h-screen">
      <Hearder />

      <div className="absolute inset-0">
        <img
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>


      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-6 sm:p-10 w-[90%] max-w-md rounded-lg text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-gray-700 rounded"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700 rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 rounded"
        />

        {errorMessage && (
          <p className="text-red-500 text-sm py-2">{errorMessage}</p>
        )}

        <button
          className="p-3 my-4 bg-red-700 w-full rounded-lg hover:bg-red-800 transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p
          className="py-4 text-center text-sm sm:text-base cursor-pointer hover:underline"
          onClick={toggleSignForm}
        >
          {isSignInForm
            ? 'New to Netflix? Sign Up Now.'
            : 'Already registered? Sign In Now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
