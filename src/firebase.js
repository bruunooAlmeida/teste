import firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyCCVUo_8sM1sv8YL6cQczeyR2YmTXNo4tE",
  authDomain: "semana8-360a2.firebaseapp.com",
  projectId: "semana8-360a2",
  storageBucket: "semana8-360a2.appspot.com",
  messagingSenderId: "1033815025456",
  appId: "1:1033815025456:web:a11cbbaac87b469afd8af5",
  measurementId: "G-8Z9TXLSNLJ"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

//const auth = getAuth(app);

//const auth = firebase.auth();
export default firebase;
//export {auth}
//export const auth = getAuth(app);
/*

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCVUo_8sM1sv8YL6cQczeyR2YmTXNo4tE",
  authDomain: "semana8-360a2.firebaseapp.com",
  projectId: "semana8-360a2",
  storageBucket: "semana8-360a2.appspot.com",
  messagingSenderId: "1033815025456",
  appId: "1:1033815025456:web:a11cbbaac87b469afd8af5",
  measurementId: "G-8Z9TXLSNLJ"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);    

*/
