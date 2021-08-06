import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCn3xeFh2x5ZdfjE6WBdZsgtGAT40idStE",
  authDomain: "lerietbool.firebaseapp.com",
  databaseURL: "https://lerietbool.firebaseio.com",
  projectId: "lerietbool",
  storageBucket: "lerietbool.appspot.com",
  messagingSenderId: "276795453438",
  appId: "1:276795453438:web:a2e5e2c6c0c202f2eedaaf"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
