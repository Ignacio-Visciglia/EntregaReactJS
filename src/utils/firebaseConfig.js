// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOW3Hcg1RSAiiyQQoiJHEJpL9Hb6dT65g",
  authDomain: "droid9southamericaecommerce.firebaseapp.com",
  projectId: "droid9southamericaecommerce",
  storageBucket: "droid9southamericaecommerce.appspot.com",
  messagingSenderId: "363742798426",
  appId: "1:363742798426:web:e6281e2a6582d82ceb2e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore Initialize
const db = getFirestore(app);

export default db;