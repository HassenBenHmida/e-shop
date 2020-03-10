import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBipIlCDCrRfgfz19JR5n6jpXnwdEZY_5A",
  authDomain: "e-shop-db-47652.firebaseapp.com",
  databaseURL: "https://e-shop-db-47652.firebaseio.com",
  projectId: "e-shop-db-47652",
  storageBucket: "e-shop-db-47652.appspot.com",
  messagingSenderId: "1065381167045",
  appId: "1:1065381167045:web:126201b9e71ddd7c4455ac",
  measurementId: "G-5TX1WXG8VV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    try {
      const { displayName, email } = userAuth;
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);

provider.setCustomParameters({
  login_hint: "user@example.com",
  prompt: "select_account"
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
