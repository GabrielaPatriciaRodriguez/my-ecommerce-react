
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQERjtG1b2Y0sG6wtThdt4WmBTfSK5DBI",
  authDomain: "ecommerce-react-6617c.firebaseapp.com",
  projectId: "ecommerce-react-6617c",
  storageBucket: "ecommerce-react-6617c.appspot.com",
  messagingSenderId: "940175254709",
  appId: "1:940175254709:web:07bda5617da316474e8afc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);