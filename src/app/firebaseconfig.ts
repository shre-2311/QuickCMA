import { FirebaseApp,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs7wWW5hPiafv2OGrAx5eScfip_Vm-P4A",
  authDomain: "alpha-project-f3f08.firebaseapp.com",
  projectId: "alpha-project-f3f08",
  storageBucket: "alpha-project-f3f08.firebasestorage.app",
  messagingSenderId: "949042822578",
  appId: "1:949042822578:web:4ca1a71ff07cf4f294f8ab",
  measurementId: "G-2HMR1G6XZ0",
};
// Initialize Firebase
const app : FirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };