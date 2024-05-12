// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // we have to use process.env here, because t3 env for some reason wants to validate server variables here,
  // but this code can run in a service worker too, where it fails
  apiKey: process.env['NEXT_PUBLIC_FIREBASE_API_KEY'],
  authDomain: process.env['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
  storageBucket: process.env['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['NEXT_PUBLIC_FIREBASE_APP_ID'],
} satisfies FirebaseOptions;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);