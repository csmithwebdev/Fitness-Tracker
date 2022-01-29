import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD5YqVHLdnJ93Gb8wWFePZ44Tgqu2gqXbk",
  authDomain: "fitness-tracker-3b2c5.firebaseapp.com",
  databaseURL: "https://fitness-tracker-3b2c5-default-rtdb.firebaseio.com",
  projectId: "fitness-tracker-3b2c5",
  storageBucket: "fitness-tracker-3b2c5.appspot.com",
  messagingSenderId: "389460669781",
  appId: "1:389460669781:web:2767276f4629469a6d6bdc"
});

export const auth = app.auth();
export const database = app.database(); 
export default app;