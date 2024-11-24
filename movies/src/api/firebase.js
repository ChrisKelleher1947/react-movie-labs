import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOwcsypbGPtXlSBNQ2BNrzIVxCH-1TxFs",
    authDomain: "webappdev2-e0cf1.firebaseapp.com",
    projectId: "webappdev2-e0cf1",
    storageBucket: "webappdev2-e0cf1.firebasestorage.app",
    messagingSenderId: "264762527585",
    appId: "1:264762527585:web:8dd7556de17a23ef17bf20",
    measurementId: "G-7FSGE5MMXC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




