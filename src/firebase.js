import { initializeApp } from 'firebase/app';
import { getFirestore, query, getDocs, collection, where, addDoc, } from 'firebase/firestore';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBde2x4wx7ZuhYPDGm-04_iqzvkm-Ldgek",
    authDomain: "linkedinclone-react.firebaseapp.com",
    projectId: "linkedinclone-react",
    storageBucket: "linkedinclone-react.appspot.com",
    messagingSenderId: "960647127857",
    appId: "1:960647127857:web:375d41ada31a5221494610"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {db, auth};