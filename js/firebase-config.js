import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDk0cEYLi873DuUuXVdz_S2kqXKa6R38pI",
    authDomain: "mnmoo-86085.firebaseapp.com",
    projectId: "mnmoo-86085",
    storageBucket: "mnmoo-86085.firebasestorage.app",
    messagingSenderId: "10678058131",
    appId: "1:10678058131:web:9138e5f07b57922173a166",
    measurementId: "G-JKD3VGR3F2"
  };
   

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

