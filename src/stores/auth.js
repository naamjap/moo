import { defineStore } from 'pinia'
import { auth } from 'src/boot/firebase' // Add this import
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  sendEmailVerification,
  applyActionCode,
  sendPasswordResetEmail
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),

  actions: {
    async login(email, password) {
      this.loading = true
      this.error = null
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        this.user = userCredential.user
        
        if (!this.user.emailVerified) {
          this.error = 'EMAIL_NOT_VERIFIED'
          return { success: false, reason: 'EMAIL_NOT_VERIFIED' }
        }
        
        return { success: true }
      } catch (error) {
        const errorCode = error.code || error.message
        this.error = this.getReadableErrorMessage(errorCode)
        return { success: false, reason: errorCode }
      } finally {
        this.loading = false
      }
    },

    async signup(email, password) {
      this.loading = true
      this.error = null
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(userCredential.user)
        this.user = userCredential.user
        return { success: true }
      } catch (error) {
        const errorMessage = this.getSignupErrorMessage(error.code, error.message)
        this.error = errorMessage
        return { 
          success: false, 
          reason: error.code,
          message: errorMessage
        }
      } finally {
        this.loading = false
      }
    },

    async loginWithGoogle() {
      const provider = new GoogleAuthProvider()
      try {
        const result = await signInWithPopup(auth, provider)
        this.user = result.user
        return true
      } catch (error) {
        this.error = error.message
        return false
      }
    },

    async loginWithFacebook() {
      const provider = new FacebookAuthProvider()
      try {
        const result = await signInWithPopup(auth, provider)
        this.user = result.user
        return true
      } catch (error) {
        this.error = error.message
        return false
      }
    },

    async logout() {
      try {
        await signOut(auth)
        this.user = null
        return true
      } catch (error) {
        this.error = error.message
        return false
      }
    },

    async verifyEmail(actionCode) {
      this.loading = true
      this.error = null
      try {
        await applyActionCode(auth, actionCode)
        if (this.user) {
          // Reload user to update emailVerified status
          await this.user.reload()
        }
        return true
      } catch (error) {
        this.error = error.message
        return false
      } finally {
        this.loading = false
      }
    },

    async resendVerificationEmail() {
      if (!this.user) return { success: false, error: 'No user logged in' }
      try {
        await sendEmailVerification(this.user)
        return { success: true }
      } catch (error) {
        const errorMessage = this.getVerificationErrorMessage(error.code || error.message)
        this.error = errorMessage
        return { 
          success: false, 
          error: errorMessage,
          reason: error.code 
        }
      }
    },

    getReadableErrorMessage(errorCode) {
      const errorMessages = {
        'auth/wrong-password': 'Incorrect password',
        'auth/user-not-found': 'No account found with this email',
        'auth/invalid-email': 'Invalid email address',
        'auth/user-disabled': 'This account has been disabled',
        'auth/email-already-in-use': 'This email is already registered',
        'auth/weak-password': 'Password should be at least 6 characters',
        'EMAIL_NOT_VERIFIED': 'Please verify your email address first',
        'auth/too-many-requests': 'Too many attempts. Please try again later',
        'INVALID_LOGIN_CREDENTIALS': 'Invalid email or password',
        'auth/invalid-credential': 'Invalid email or password',
        'auth/invalid-login-credentials': 'Invalid email or password'
      }
      return errorMessages[errorCode] || 'An error occurred during authentication'
    },

    getSignupErrorMessage(errorCode, defaultMessage) {
      const errorMessages = {
        'auth/email-already-in-use': 'This email is already registered',
        'auth/invalid-email': 'Please enter a valid email address',
        'auth/operation-not-allowed': 'Email/password accounts are not enabled. Please contact support.',
        'auth/weak-password': 'Password should be at least 6 characters',
        'WEAK_PASSWORD': 'Password should be at least 6 characters'
      }
      
      if (defaultMessage?.includes('WEAK_PASSWORD')) {
        return errorMessages['WEAK_PASSWORD']
      }
      
      return errorMessages[errorCode] || defaultMessage || 'Failed to create account'
    },

    getVerificationErrorMessage(errorCode) {
      const errorMessages = {
        'TOO_MANY_ATTEMPTS_TRY_LATER': 'Too many attempts. Please wait a few minutes before trying again.',
        'auth/too-many-requests': 'Too many attempts. Please wait a few minutes before trying again.',
        'auth/user-not-found': 'User not found.',
        'auth/invalid-user': 'Invalid user.'
      }
      return errorMessages[errorCode] || 'Failed to send verification email'
    }
  },

  getters: {
    isEmailVerified: (state) => state.user?.emailVerified ?? false
  }
})
