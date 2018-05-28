import firebase from 'firebase'

var config = {
  // process.env.REACT_APP_FIREBASE_API_KEY
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
   authDomain: "old-growth.firebaseapp.com",
   databaseURL: "https://old-growth.firebaseio.com",
   projectId: "old-growth",
   storageBucket: "old-growth.appspot.com",
   messagingSenderId: "710188637632"
 };
 const fire = firebase.initializeApp(config)
 export default fire
