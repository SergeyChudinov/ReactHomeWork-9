import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAnOjlxwLjJBFYjR1ARyF8KwTZMimblbAA",
    authDomain: "firelesson9-523c2.firebaseapp.com",
    projectId: "firelesson9-523c2",
    storageBucket: "firelesson9-523c2.appspot.com",
    messagingSenderId: "694747467128",
    appId: "1:694747467128:web:f32848909036ac7b4d0c8d"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();