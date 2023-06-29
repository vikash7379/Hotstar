import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB_5VaTPTtlCPAUqCstxOkfPf65NXl8EDo",
    authDomain: "disneyplus-3c1b0.firebaseapp.com",
    projectId: "disneyplus-3c1b0",
    storageBucket: "disneyplus-3c1b0.appspot.com",
    messagingSenderId: "804880453525",
    appId: "1:804880453525:web:824f1c2f371634936a309c",
    measurementId: "G-9P1QWSSPQM"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage;

  export { auth , provider,storage};
  export default db;