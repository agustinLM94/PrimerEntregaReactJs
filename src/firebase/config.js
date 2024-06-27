
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVq3qjbhWNVtaaFkrAm2fypxHXeqW4-KQ",
  authDomain: "rulopetshop-aa37a.firebaseapp.com",
  projectId: "rulopetshop-aa37a",
  storageBucket: "rulopetshop-aa37a.appspot.com",
  messagingSenderId: "957526538498",
  appId: "1:957526538498:web:8b355f46175329b4156a1b",
  measurementId: "G-93CB7E80CB"
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);