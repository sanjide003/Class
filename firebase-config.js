import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';

// Shared Firebase configuration for Admin, Teacher, and Student pages.
const firebaseConfig = {
  apiKey: 'AIzaSyAfJSonmGHnf0t92B71ycuAZbc-CV3k7LE',
  authDomain: 'fest-dsd-003.firebaseapp.com',
  projectId: 'fest-dsd-003',
  storageBucket: 'fest-dsd-003.firebasestorage.app',
  messagingSenderId: '409596394273',
  appId: '1:409596394273:web:b930012ce0a845ddb45c60'
};
export const db = getFirestore(initializeApp(firebaseConfig));
