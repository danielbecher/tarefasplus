import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBWot5RMXmiz-5pSivRr1M0ToDSopld6s",
  authDomain: "tarefasplus-9e335.firebaseapp.com",
  databaseURL: "https://tarefasplus-9e335-default-rtdb.firebaseio.com",
  projectId: "tarefasplus-9e335",
  storageBucket: "tarefasplus-9e335.appspot.com",
  messagingSenderId: "676358552870",
  appId: "1:676358552870:web:09be1757094dfaa6f055e7"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };