import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6TIMvFD-iPZxLuLEpSOe6OQfCqMKo3HI",
    authDomain: "fb-clone-4855a.firebaseapp.com",
    projectId: "fb-clone-4855a",
    storageBucket: "fb-clone-4855a.appspot.com",
    messagingSenderId: "750556004793",
    appId: "1:750556004793:web:c2b09ec5d396d19fd87668"
  };

  const firebaseApp=firebase.intializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider}
  export default db;