import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);

provider.setCustomParameters({
    'login_hint': 'user@example.com',
    'prompt': 'select_account',
})

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;