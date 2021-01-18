import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBx-AFCVDNVd1Khw5MERcOhpsiyo9CCrUY",
  authDomain: "great-wall-of-cats.firebaseapp.com",
  projectId: "great-wall-of-cats",
  storageBucket: "great-wall-of-cats.appspot.com",
  messagingSenderId: "830046201670",
  appId: "1:830046201670:web:8b11d7b16388fc2d9b6747",
  measurementId: "G-ZQ8Q914FLS",
};

// INITIALIZE APP
firebase.initializeApp(config);

// STORAGE
export const storage = firebase.storage().ref();

// USER AUTHENTICATION
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user.", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
