<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="auth-card q-pa-lg">
      <q-card-section class="text-center">
        <div class="text-h4 text-weight-bold text-primary">Welcome Back</div>
        <div class="text-subtitle1 text-grey-7">Login to continue your journey</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <!-- Show error banner if exists -->
          <q-banner v-if="errorMessage" class="bg-negative text-white q-mb-md">
            {{ errorMessage }}
            <template v-if="showResendButton">
              <q-btn
                flat
                color="white"
                label="Resend Verification Email"
                :loading="resending"
                @click="resendVerificationEmail"
              />
            </template>
          </q-banner>

          <q-input
            v-model="email"
            label="Email"
            type="email"
            filled
            :rules="[val => !!val || 'Email is required']"
          />
          <q-input
            v-model="password"
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            filled
            :rules="[val => !!val || 'Password is required']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            class="full-width"
            size="lg"
            :loading="authStore.loading"
            label="Login"
          />
        </q-form>

        <div class="text-center q-py-md">
          <div class="text-grey-6">Or continue with</div>
          <div class="row q-mt-md justify-center q-gutter-md">
            <q-btn
              flat
              round
              color="red"
              icon="fab fa-google"
              @click="loginWithGoogle"
            />
            <q-btn
              flat
              round
              color="blue"
              icon="fab fa-facebook-f"
              @click="loginWithFacebook"
            />
          </div>
        </div>

        <div class="text-center q-mt-sm">
          <router-link to="/signup" class="text-primary">
            Don't have an account? Sign up
          </router-link>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const isPwd = ref(true)
const errorMessage = ref('')
const showResendButton = ref(false)
const resending = ref(false)

const onSubmit = async () => {
  errorMessage.value = ''
  showResendButton.value = false
  
  const result = await authStore.login(email.value, password.value)
  
  if (!result.success) {
    errorMessage.value = authStore.error
    password.value = '' // Clear password on any error
    
    // Check for specific error cases
    if (result.reason === 'EMAIL_NOT_VERIFIED') {
      showResendButton.value = true
    } else if (
      result.reason === 'INVALID_LOGIN_CREDENTIALS' ||
      result.reason === 'auth/invalid-credential' ||
      result.reason === 'auth/invalid-login-credentials'
    ) {
      $q.notify({
        type: 'negative',
        message: 'Invalid email or password',
        position: 'top'
      })
    }
  } else {
    router.push('/dashboard')
  }
}

const resendVerificationEmail = async () => {
  resending.value = true
  try {
    await authStore.resendVerificationEmail()
    $q.notify({
      type: 'positive',
      message: 'Verification email sent! Please check your inbox.'
    })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Failed to send verification email'
    })
  }
  resending.value = false
}

const loginWithGoogle = async () => {
  const success = await authStore.loginWithGoogle()
  if (success) {
    router.push('/dashboard')
  }
}

const loginWithFacebook = async () => {
  const success = await authStore.loginWithFacebook()
  if (success) {
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.auth-card {
  width: 100%;
  max-width: 400px;
}
</style>
