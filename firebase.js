// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMfcEmTI3CAea7MAxqQ-dUPJB7lluhyoo",
    authDomain: "hostel-store-7d4fb.firebaseapp.com",
    projectId: "hostel-store-7d4fb",
    storageBucket: "hostel-store-7d4fb.firebasestorage.app",
    messagingSenderId: "428585446414",
    appId: "1:428585446414:web:e1aafcd7c4a3088f9b605f",
    measurementId: "G-PYCSYVNW35"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

// Cloud Firestore
const db = firebase.firestore();
