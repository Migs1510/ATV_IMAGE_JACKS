import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported  } from "firebase/analytics";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyC4VFv3LS_HxdnI9pg8kAgrg241hjfbbCc",
  authDomain: "fir-chat-e5bec.firebaseapp.com",
  projectId: "fir-chat-e5bec",
  storageBucket: "fir-chat-e5bec.firebasestorage.app",
  messagingSenderId: "798242393822",
  appId: "1:798242393822:web:6f8e356fdb8a5dab227c4f",
  measurementId: "G-WSN5LQD8S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  }
});

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
