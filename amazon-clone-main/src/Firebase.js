import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD32aMqgIO9kEUEsQEb76VDAbhYlyLh3JY",
    authDomain: "clone-ecf93.firebaseapp.com",
    projectId: "clone-ecf93",
    storageBucket: "clone-ecf93.appspot.com",
    messagingSenderId: "838607973535",
    appId: "1:838607973535:web:29d1fc085456d87581c6aa",
    measurementId: "G-H0J6Z2MB20"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();

  export {db,auth};