import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyDU4EyUQIoaBX0VrrWR9z9O3LSnFnSB58U",
    authDomain: "sistemawebasistenciascls-9fe91.firebaseapp.com",
    projectId: "sistemawebasistenciascls-9fe91",
    storageBucket: "sistemawebasistenciascls-9fe91.appspot.com",
    messagingSenderId: "774161389766",
    appId: "1:774161389766:web:5712c86a8fd15f18ccdfc7",
    measurementId: "G-T6PMW96ZHP"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase; 