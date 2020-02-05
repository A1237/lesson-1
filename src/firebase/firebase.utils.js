import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBKs_VPywUQQYE-MItCrrCtmjFqcyES5EI",
  authDomain: "react-ecom-9b376.firebaseapp.com",
  databaseURL: "https://react-ecom-9b376.firebaseio.com",
  projectId: "react-ecom-9b376",
  storageBucket: "react-ecom-9b376.appspot.com",
  messagingSenderId: "501486254140",
  appId: "1:501486254140:web:d089062a0e56abdb34ab39",
  measurementId: "G-M75HBE60VK"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
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
        ...additonalData
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
