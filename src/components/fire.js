import Rebase from 're-base';
import firebase from 'firebase';


const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBTAQd0P0sY9xFtk-5bG3k_MvpvpyBkRoc",
    authDomain: "teletalk-b9762.firebaseapp.com",
    databaseURL: "https://teletalk-b9762.firebaseio.com",
    projectId: "teletalk-b9762",
    storageBucket: "teletalk-b9762.appspot.com",
    messagingSenderId: "220762466858"
};
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()
export { app, base, facebookProvider }