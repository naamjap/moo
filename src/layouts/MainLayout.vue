<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-grey-8">
      <q-toolbar>
        <!-- Logo Area -->
        <q-toolbar-title>
          <div class="row items-center no-wrap" style="cursor: pointer;" @click="$router.push('/')">
            <svg width="120" height="32" viewBox="0 0 150 40" class="q-mr-sm">
              <text x="5" y="28" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 28px; font-weight: bold; fill: #2c3e50;">MnMoo</text>
              <path d="M115 20 Q 120 10, 125 20 T 135 20" style="fill: none; stroke: var(--q-primary); stroke-width: 2; stroke-linecap: round;" />
            </svg>
          </div>
        </q-toolbar-title>

        <!-- Show different buttons based on auth status -->
        <template v-if="!isLoggedIn">
          <q-btn flat dense label="Log In" to="/login" />
          <q-btn unelevated dense color="primary" label="Sign Up" to="/signup" class="q-ml-sm" />
        </template>
        <template v-else>
          <q-btn flat dense :icon="userPhotoUrl ? undefined : 'person'" to="/dashboard">
            <q-avatar v-if="userPhotoUrl" size="26px">
              <img :src="userPhotoUrl" :alt="userName">
            </q-avatar>
            <template v-else>{{ userName }}</template>
          </q-btn>
          <q-btn flat dense icon="logout" @click="handleLogout">
            <q-tooltip>Logout</q-tooltip>
          </q-btn>
        </template>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()
const authStore = useAuthStore()

const isLoggedIn = computed(() => !!authStore.user)
const userName = computed(() => authStore.user?.displayName || 'User')
const userPhotoUrl = computed(() => 
  authStore.user?.photoURL || 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(userName.value)}&background=random`
)

const handleLogout = async () => {
  try {
    await authStore.logout()
    router.push('/login')
    $q.notify({
      type: 'positive',
      message: 'Logged out successfully'
    })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Failed to logout'
    })
  }
}
</script>
