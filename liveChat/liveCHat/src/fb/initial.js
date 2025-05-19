import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCugsAqeK6eBScOlalAIEH2L_v72P3QVZ4",
  authDomain: "livechat-16cbd.firebaseapp.com",
  projectId: "livechat-16cbd",
  storageBucket: "livechat-16cbd.firebasestorage.app",
  messagingSenderId: "93036555675",
  appId: "1:93036555675:web:5c0d969ac84518992f453e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { app, db, auth }