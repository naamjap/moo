<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="auth-card q-pa-lg">
      <q-card-section class="text-center">
        <div class="text-h4 text-weight-bold text-primary">Create Account</div>
        <div class="text-subtitle1 text-grey-7">Start your musical journey</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <!-- Error Banner -->
          <q-banner v-if="errorMessage" class="bg-negative text-white q-mb-md">
            {{ errorMessage }}
          </q-banner>

          <q-input
            v-model="name"
            label="Full Name"
            filled
            :rules="[val => !!val || 'Name is required']"
            :disable="loading"
          />
          <q-input
            v-model="email"
            label="Email"
            type="email"
            filled
            :rules="[
              val => !!val || 'Email is required',
              val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Please enter a valid email'
            ]"
            :disable="loading"
          />
          <q-input
            v-model="password"
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            filled
            :rules="[
              val => !!val || 'Password is required',
              val => val.length >= 6 || 'Password must be at least 6 characters'
            ]"
            :disable="loading"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
            <template v-slot:hint>
              Must be at least 6 characters long
            </template>
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            class="full-width"
            size="lg"
            :loading="loading"
            label="Sign Up"
          />
        </q-form>

        <div class="text-center q-py-md">
          <div class="text-grey-6">Or sign up with</div>
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
          <router-link to="/login" class="text-primary">
            Already have an account? Login
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

const name = ref('')
const email = ref('')
const password = ref('')
const isPwd = ref(true)
const loading = ref(false)
const errorMessage = ref('')

const onSubmit = async () => {
  loading.value = true
  errorMessage.value = ''

  const result = await authStore.signup(email.value, password.value)
  
  if (!result.success) {
    errorMessage.value = result.message
    if (result.reason === 'auth/weak-password' || result.reason === 'WEAK_PASSWORD') {
      password.value = '' // Clear password field
      $q.notify({
        type: 'negative',
        message: 'Password too weak',
        caption: 'Please use at least 6 characters',
        position: 'top'
      })
    } else {
      $q.notify({
        type: 'negative',
        message: result.message,
        position: 'top'
      })
    }
  } else {
    $q.notify({
      type: 'positive',
      message: 'Account created successfully! Please check your email for verification.',
      position: 'top'
    })
    router.push('/verify-email')
  }
  
  loading.value = false
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
