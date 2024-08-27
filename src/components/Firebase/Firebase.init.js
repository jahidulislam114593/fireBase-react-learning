// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8c90jpptbuLaeeMRPBT3p2wVjJbBJ3dc",
  authDomain: "fir-react-auth-50ea7.firebaseapp.com",
  projectId: "fir-react-auth-50ea7",
  storageBucket: "fir-react-auth-50ea7.appspot.com",
  messagingSenderId: "299678876637",
  appId: "1:299678876637:web:a8436c473e4cbf68a92c34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
