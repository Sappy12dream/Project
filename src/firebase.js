import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDeip9LFfHNHH1Hhm4SRSZwJdifLHdgBFU",
    authDomain: "project-manager-eb95d.firebaseapp.com",
    databaseURL: "https://project-manager-eb95d.firebaseio.com",
    projectId: "project-manager-eb95d",
    storageBucket: "project-manager-eb95d.appspot.com",
    messagingSenderId: "1051312060920",
    appId: "1:1051312060920:web:1d9a872f1a3eca910a7e0d",
    measurementId: "G-D0ED5W7M25"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;