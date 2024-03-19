import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import the compat version
import 'firebase/compat/firestore';
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from './Components/Auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCPZTbVtVlvopTBiDQQa3Nm7icsdKAh9SY",
  authDomain: "zabibu-ut.firebaseapp.com",
  databaseURL: "https://zabibu-ut-default-rtdb.firebaseio.com",
  projectId: "zabibu-ut",
  storageBucket: "zabibu-ut.appspot.com",
  messagingSenderId: "1043957777613",
  appId: "1:1043957777613:web:0948d12cc2ab3244381584",
  measurementId: "G-MB6RXV7076"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
