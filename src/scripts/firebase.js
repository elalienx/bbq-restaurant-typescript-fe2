// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Properties
const firebaseConfig = {
  apiKey: "AIzaSyBt5qgYbNAvhrhjyGsZlhmXJFTTfPV39Pg",
  authDomain: "bbq-restaurant-javascript-fe2.firebaseapp.com",
  projectId: "bbq-restaurant-javascript-fe2",
  storageBucket: "bbq-restaurant-javascript-fe2.appspot.com",
  messagingSenderId: "712981828534",
  appId: "1:712981828534:web:4ccf8c25fe6d6a756ce717",
};
const firebaseApp = initializeApp(firebaseConfig);

export const fireStore = getFirestore(firebaseApp);
export const cloudStorage = getStorage(firebaseApp);
