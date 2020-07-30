import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: 'AIzaSyCfgU2m23329E61IV57vb10mxi14xqEN3E',
  authDomain: 'react-firegram-gallery.firebaseapp.com',
  databaseURL: 'https://react-firegram-gallery.firebaseio.com',
  projectId: 'react-firegram-gallery',
  storageBucket: 'react-firegram-gallery.appspot.com',
  messagingSenderId: '1037397709320',
  appId: '1:1037397709320:web:62125d1788bb27b784b7bd',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storageService = firebase.storage();
const firestoreService = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { storageService, firestoreService, timeStamp };
