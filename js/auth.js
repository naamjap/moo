import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    OAuthProvider,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from './firebase-config.js';

class AuthService {
    constructor() {
        this.auth = auth;
        this.currentUser = null;
        
        // Set up auth state listener
        onAuthStateChanged(this.auth, (user) => {
            this.currentUser = user;
        });

        // Initialize providers
        this.googleProvider = new GoogleAuthProvider();
        this.facebookProvider = new FacebookAuthProvider();
        this.appleProvider = new OAuthProvider('apple.com');
    }

    async login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async signup(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    }

    async loginWithGoogle() {
        try {
            const result = await signInWithPopup(this.auth, this.googleProvider);
            return result.user;
        } catch (error) {
            console.error('Google login error:', error);
            throw error;
        }
    }

    async loginWithFacebook() {
        try {
            const result = await signInWithPopup(this.auth, this.facebookProvider);
            return result.user;
        } catch (error) {
            console.error('Facebook login error:', error);
            throw error;
        }
    }

    async loginWithApple() {
        try {
            const result = await signInWithPopup(this.auth, this.appleProvider);
            return result.user;
        } catch (error) {
            console.error('Apple login error:', error);
            throw error;
        }
    }

    async logout() {
        try {
            await signOut(this.auth);
            window.location.href = '/login.html';
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    isLoggedIn() {
        return !!this.currentUser;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    requireAuth() {
        if (!this.isLoggedIn()) {
            window.location.href = '/login.html';
            return false;
        }
        return true;
    }
}

export const authService = new AuthService();
