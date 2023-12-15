import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDR3zgjPs_KkilC8qz8sDHgg07dfHiUbMM",
    authDomain: "linked-in-89d34.firebaseapp.com",
    projectId: "linked-in-89d34",
    storageBucket: "linked-in-89d34.appspot.com",
    messagingSenderId: "955828416187",
    appId: "1:955828416187:web:8d6104443d0b006dc8439e",
    measurementId: "G-7EXKVZXG12"
  };

  const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };


  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  // export {db, auth};