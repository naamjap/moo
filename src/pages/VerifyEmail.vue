<template>
  <q-page class="flex flex-center">
    <div class="text-center q-pa-md">
      <template v-if="!authStore.isEmailVerified">
        <h2 class="text-h4 q-mb-md">Verify Your Email</h2>
        <p class="text-body1 q-mb-lg">
          Please check your email for a verification link.
          <br>Didn't receive the email?
        </p>
        
        <!-- Show error message if exists -->
        <q-banner v-if="errorMessage" class="bg-negative text-white q-mb-md">
          {{ errorMessage }}
        </q-banner>

        <q-btn
          color="primary"
          label="Resend Verification Email"
          :loading="resending"
          :disable="cooldownActive"
          @click="resendVerification"
        />
        
        <!-- Show cooldown message if active -->
        <p v-if="cooldownActive" class="text-caption text-grey-7 q-mt-sm">
          Please wait {{ cooldownSeconds }} seconds before requesting another email
        </p>
      </template>
      <template v-else>
        <div class="text-positive">
          <q-icon name="check_circle" size="4rem" />
          <h2 class="text-h4 q-mb-md">Email Verified!</h2>
        </div>
        <q-btn color="primary" label="Continue to Dashboard" to="/dashboard" />
      </template>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useAuthStore } from 'src/stores/auth'
import { useQuasar } from 'quasar'

const authStore = useAuthStore()
const $q = useQuasar()
const resending = ref(false)
const errorMessage = ref('')
const cooldownSeconds = ref(0)
const cooldownActive = ref(false)
let cooldownTimer = null

const startCooldown = (seconds = 60) => {
  cooldownSeconds.value = seconds
  cooldownActive.value = true
  
  cooldownTimer = setInterval(() => {
    cooldownSeconds.value--
    if (cooldownSeconds.value <= 0) {
      clearInterval(cooldownTimer)
      cooldownActive.value = false
    }
  }, 1000)
}

const resendVerification = async () => {
  if (cooldownActive.value) return
  
  resending.value = true
  errorMessage.value = ''
  
  const result = await authStore.resendVerificationEmail()
  
  if (result.success) {
    $q.notify({
      type: 'positive',
      message: 'Verification email sent! Please check your inbox.'
    })
    startCooldown() // Start cooldown after successful send
  } else {
    errorMessage.value = result.error
    if (result.reason === 'TOO_MANY_ATTEMPTS_TRY_LATER' || 
        result.reason === 'auth/too-many-requests') {
      startCooldown(120) // Longer cooldown for rate limiting
    }
  }
  
  resending.value = false
}

// Cleanup timer on component unmount
onUnmounted(() => {
  if (cooldownTimer) clearInterval(cooldownTimer)
})
</script>
