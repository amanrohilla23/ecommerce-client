import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIXmD_Y5Ll9FALVFeRHvs0tPrLDmSbCUY",
  authDomain: "payment-abdaa.firebaseapp.com",
  projectId: "payment-abdaa",
  storageBucket: "payment-abdaa.firebasestorage.app",
  messagingSenderId: "896268720754",
  appId: "1:896268720754:web:71d1bf057a73d5412240eb",
  measurementId: "G-BQ8JH1KRH2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
