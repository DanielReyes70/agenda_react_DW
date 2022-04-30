
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDOIPyLWxbWedyzaceUKwjtAa49x9U1mOI",
  authDomain: "agenda-react-dw.firebaseapp.com",
  projectId: "agenda-react-dw",
  storageBucket: "agenda-react-dw.appspot.com",
  messagingSenderId: "901398724964",
  appId: "1:901398724964:web:02de7eda6467acebdaba71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export{firebase}