
import firebase from "firebase/app";
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAin4rxM6rBf7gZHTooOWJSKMMlTCZ-LDo",
  authDomain: "crub-basico-react-6324d.firebaseapp.com",
  projectId: "crub-basico-react-6324d",
  storageBucket: "crub-basico-react-6324d.appspot.com",
  messagingSenderId: "112474428960",
  appId: "1:112474428960:web:d00ac6e704af98da870e45"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export{firebase}