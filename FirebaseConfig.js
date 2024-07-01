// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMcBg7Wo9hNbFM7vwa10s84aWmlEmBlZ4",
  authDomain: "recipeapp-45241.firebaseapp.com",
  projectId: "recipeapp-45241",
  storageBucket: "recipeapp-45241.appspot.com",
  messagingSenderId: "499120186463",
  appId: "1:499120186463:web:c5a09a444639c37e4da7ea",
  measurementId: "G-087KLH0X2C"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

 

