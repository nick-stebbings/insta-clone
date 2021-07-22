const config = {
  apiKey: "AIzaSyAcNAhXzN6qBMEQvWS0XPQz6wKQtDBS1ww",
  authDomain: "instaclone-4ee53.firebaseapp.com",
  projectId: "instaclone-4ee53",
  storageBucket: "instaclone-4ee53.appspot.com",
  messagingSenderId: "218908953150",
  appId: "1:218908953150:web:7ee157496ae7b49c575f6f"
};

// Initialize Firebase
const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

export { firebase, FieldValue };