<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <template v-if="loading">
        <q-spinner size="3rem" color="primary" />
        <div class="text-h6 q-mt-md">Verifying...</div>
      </template>
      <template v-else-if="error">
        <q-icon name="error" size="3rem" color="negative" />
        <div class="text-h6 q-mt-md">{{ error }}</div>
        <q-btn color="primary" label="Go to Login" to="/login" class="q-mt-md" />
      </template>
      <template v-else>
        <q-icon name="check_circle" size="3rem" color="positive" />
        <div class="text-h6 q-mt-md">Email verified successfully!</div>
        <q-btn color="primary" label="Continue to Login" to="/login" class="q-mt-md" />
      </template>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'

const route = useRoute()
const authStore = useAuthStore()
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  const mode = route.query.mode
  const actionCode = route.query.oobCode

  if (mode === 'verifyEmail' && actionCode) {
    try {
      await authStore.verifyEmail(actionCode)
      loading.value = false
    } catch (err) {
      error.value = err.message
      loading.value = false
    }
  } else {
    error.value = 'Invalid verification link'
    loading.value = false
  }
})
</script>
