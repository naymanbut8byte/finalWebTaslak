import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";

// Firebase Setup
const firebaseConfig = {
    apiKey: "AIzaSyBmfB6g-6RUvifSpWC7Pr2JkwBOG_cGAzA",
    authDomain: "react-db-56527.firebaseapp.com",
    projectId: "react-db-56527",
    storageBucket: "react-db-56527.appspot.com",
    messagingSenderId: "924902363654",
    appId: "1:924902363654:web:7decf5aed237f3f66d2987",
    measurementId: "G-W3CGPPNFJD"
  };

const firebaseApp = initializeApp(firebaseConfig);

// Authentication Setup
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Firestore Setup
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid); //benzersiz bir bağlantı noktası
    const userSnapShot = await getDoc(userDocRef); // veri setine erişim

    // Users veritabanı yok ise
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("kullancıyı kaydetmede hata:", error.message);
        }
    }

    //Benzersiz bağlantıyı döndürme
    return userDocRef;
}

// Email/Password Sign Up
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}
