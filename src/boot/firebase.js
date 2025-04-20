import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics"
import { useAuthStore } from 'src/stores/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDk0cEYLi873DuUuXVdz_S2kqXKa6R38pI",
    authDomain: "mnmoo-86085.firebaseapp.com",
    projectId: "mnmoo-86085",
    storageBucket: "mnmoo-86085.firebasestorage.app",
    messagingSenderId: "10678058131",
    appId: "1:10678058131:web:9138e5f07b57922173a166",
    measurementId: "G-JKD3VGR3F2"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const analytics = getAnalytics(app)

// Add auth state listener
export default ({ app }) => {
  const authStore = useAuthStore()
  
  onAuthStateChanged(auth, (user) => {
    authStore.user = user
    console.log('Auth state changed:', user ? 'logged in' : 'logged out')
  })
}

export { auth, analytics }



