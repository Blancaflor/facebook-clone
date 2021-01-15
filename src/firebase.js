import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDkRmqvuJ73WE1cvIMlQy_jqLsCc8GXqp8",
    authDomain: "k-book-7b859.firebaseapp.com",
    databaseURL: "https://k-book-7b859.firebaseio.com",
    projectId: "k-book-7b859",
    storageBucket: "k-book-7b859.appspot.com",
    messagingSenderId: "950089753490",
    appId: "1:950089753490:web:dfa41eedd71e4da064574b",
    measurementId: "G-RCV6SESZJC"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig); 
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { auth, provider };
 export default db;