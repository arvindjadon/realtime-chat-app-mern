//! Add Firebase SDK

//? If you're already using npm and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK:
// npm install firebase

//? Then, initialize Firebase and begin using the SDKs for the products you'd like to use.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkcZ0uhI7QJO-VfWPLpMKHz5ipTNffxDA",
  authDomain: "realtime-chat-app-mern.firebaseapp.com",
  projectId: "realtime-chat-app-mern",
  storageBucket: "realtime-chat-app-mern.appspot.com",
  messagingSenderId: "521711729726",
  appId: "1:521711729726:web:69034d40e6fe4c6829256f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! 3 Install Firebase CLI
//? To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool). Run the following npm command to install the CLI or update to the latest CLI version.
// npm install -g firebase-tools

//! 4 Deploy to Firebase Hosting
//? You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

//? Sign in to Google
// firebase login

//? Initiate your project Run this command from your app's root directory:
// firebase init

//? When you're ready, deploy your web app Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
// firebase deploy
