// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyDE67_9GL8itryfKk3jaxZMQ7qHdoR3h8Y',
//   authDomain: 'whatssub3.firebaseapp.com',
//   projectId: 'whatssub3',
//   storageBucket: 'whatssub3.appspot.com',
//   messagingSenderId: '844613056939',
//   appId: '1:844613056939:web:ae5d4af2d1960d4d36baee',
// };
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, firebaseConfig };
