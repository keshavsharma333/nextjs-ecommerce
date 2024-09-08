// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
