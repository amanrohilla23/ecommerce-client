import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';

export default function Login({ setUser }) {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => setUser(result.user))
      .catch(err => alert("Login Failed"));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <button
        onClick={loginWithGoogle}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg text-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}
