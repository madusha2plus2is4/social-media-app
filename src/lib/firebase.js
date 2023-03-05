import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJStVtxCMLghQvoa1YoRsGiEMyY61tUkg",
  authDomain: "social-media-app-43607.firebaseapp.com",
  projectId: "social-media-app-43607",
  storageBucket: "social-media-app-43607.appspot.com",
  messagingSenderId: "123518310041",
  appId: "1:123518310041:web:217747dfd6c59f70c4ca08",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
