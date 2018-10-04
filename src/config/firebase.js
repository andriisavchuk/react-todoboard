import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC7jAXTPW1nPcyzYPno-P362rYY2_r6yDw',
  authDomain: 'todoboard-45eee.firebaseapp.com',
  databaseURL: 'https://todoboard-45eee.firebaseio.com',
  projectId: 'todoboard-45eee',
  storageBucket: 'todoboard-45eee.appspot.com',
  messagingSenderId: '778232459514'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
