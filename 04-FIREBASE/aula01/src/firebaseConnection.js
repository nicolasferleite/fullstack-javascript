import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAAnUPiQES8tZwBO-cgTQRR7n3uFxeOY5I",
    authDomain: "sujeito-programador-64d9c.firebaseapp.com",
    projectId: "sujeito-programador-64d9c",
    storageBucket: "sujeito-programador-64d9c.appspot.com",
    messagingSenderId: "1066322657585",
    appId: "1:1066322657585:web:7d64803cebbd2fa42bf010",
    measurementId: "G-VNRB4RS2WC"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };