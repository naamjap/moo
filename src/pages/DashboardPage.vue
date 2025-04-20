<template>
  <q-page class="q-pa-md">
    <!-- User Profile Header -->
    <div class="row items-center justify-between q-mb-lg bg-primary text-white q-pa-md rounded-borders">
      <div class="row items-center">
        <q-avatar size="72px" class="q-mr-md">
          <img :src="userPhotoUrl" :alt="userName">
        </q-avatar>
        <div>
          <div class="text-h5">{{ userName }}</div>
          <div class="text-subtitle2">{{ userEmail }}</div>
          <q-badge v-if="!isPremium" color="warning" class="q-mt-sm">
            Free Account
          </q-badge>
          <q-badge v-else color="positive" class="q-mt-sm">
            Premium Member
          </q-badge>
        </div>
      </div>
      <div class="row items-center">
        <q-btn
          v-if="!isPremium"
          color="accent"
          label="Upgrade to Premium"
          class="q-mr-md"
          @click="showUpgradeDialog = true"
        />
        <q-btn
          flat
          round
          icon="logout"
          @click="handleLogout"
        >
          <q-tooltip>Logout</q-tooltip>
        </q-btn>
      </div>
    </div>

    <!-- Premium Upgrade Dialog -->
    <q-dialog v-model="showUpgradeDialog">
      <q-card style="min-width: 350px">
        <q-card-section class="text-center">
          <div class="text-h6">Upgrade to Premium</div>
          <div class="text-subtitle2">Unlock all features and games!</div>
        </q-card-section>

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div v-for="plan in pricingPlans" :key="plan.id" class="col-12 col-sm-4">
              <q-card class="pricing-card">
                <q-card-section class="text-center">
                  <div class="text-h6">{{ plan.name }}</div>
                  <div class="text-h4 text-primary q-mt-sm">{{ plan.price }}</div>
                  <div class="text-caption">{{ plan.period }}</div>
                </q-card-section>
                <q-card-section>
                  <q-list dense>
                    <q-item v-for="feature in plan.features" :key="feature">
                      <q-item-section avatar>
                        <q-icon name="check" color="positive" />
                      </q-item-section>
                      <q-item-section>{{ feature }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
                <q-card-actions align="center">
                  <q-btn color="primary" :label="'Choose ' + plan.name" @click="upgradeToPremium(plan)" />
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Stats Cards -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-12 col-sm-4">
        <q-card class="stats-card">
          <q-card-section>
            <div class="text-h6">Practice Sessions</div>
            <div class="text-h3 text-primary">{{ stats.practiceSessions }}</div>
            <div class="text-caption text-grey-7">This month</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-4">
        <q-card class="stats-card">
          <q-card-section>
            <div class="text-h6">Accuracy Rate</div>
            <div class="text-h3 text-positive">{{ stats.accuracyRate }}</div>
            <div class="text-caption text-grey-7">Average</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-4">
        <q-card class="stats-card">
          <q-card-section>
            <div class="text-h6">Time Practiced</div>
            <div class="text-h3 text-accent">{{ stats.timePracticed }}</div>
            <div class="text-caption text-grey-7">Total</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Game Categories -->
    <div class="row items-center justify-between q-mb-md">
      <h2 class="text-h5 text-weight-bold">Training Games</h2>
      <q-input
        v-model="searchQuery"
        dense
        outlined
        placeholder="Search games..."
        class="col-12 col-sm-4"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <!-- Category Tabs -->
    <q-tabs
      v-model="activeTab"
      dense
      class="text-grey q-mb-md"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="all" label="All Games" />
      <q-tab 
        v-for="category in categories" 
        :key="category.id" 
        :name="category.id" 
        :label="category.name" 
      />
    </q-tabs>

    <!-- Games Grid -->
    <div class="row q-col-gutter-md">
      <template v-for="game in filteredGames" :key="game.id">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <q-card class="game-card">
            <q-img
              :src="game.image"
              :ratio="16/9"
              class="game-image"
            >
              <div class="absolute-top-right q-pa-xs">
                <q-badge v-if="game.premium && !isPremium" color="accent">
                  Premium
                </q-badge>
                <q-badge v-if="game.new" color="positive">
                  New
                </q-badge>
              </div>
            </q-img>

            <q-card-section>
              <div class="text-h6">{{ game.title }}</div>
              <div class="text-caption text-grey-7">{{ game.description }}</div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                color="primary"
                :label="game.premium && !isPremium ? 'Upgrade to Play' : 'Play'"
                @click="game.premium && !isPremium ? showUpgradeDialog = true : launchGame(game)"
              />
            </q-card-actions>

            <div v-if="game.premium && !isPremium" class="premium-overlay">
              <q-icon name="lock" size="2rem" />
            </div>
          </q-card>
        </div>
      </template>
    </div>
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()
const authStore = useAuthStore()

// Computed properties for user info
const userName = computed(() => authStore.user?.displayName || 'User')
const userEmail = computed(() => authStore.user?.email || '')
const userPhotoUrl = computed(() => 
  authStore.user?.photoURL || 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(userName.value)}&background=random`
)

const showUpgradeDialog = ref(false)
const searchQuery = ref('')
const activeTab = ref('all')
const isPremium = ref(false) // This should come from your user data

// Mock stats data
const stats = ref({
  practiceSessions: 12,
  accuracyRate: '85%',
  timePracticed: '5h'
})

// Pricing plans
const pricingPlans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$9.99',
    period: 'per month',
    features: [
      'Access all 40+ games',
      'Advanced statistics',
      'No ads',
      'Priority support'
    ]
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$89.99',
    period: 'per year',
    features: [
      'Save 25%',
      'Access all 40+ games',
      'Advanced statistics',
      'No ads',
      'Priority support'
    ]
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '$299.99',
    period: 'one-time',
    features: [
      'Best value',
      'Lifetime access',
      'All future updates',
      'VIP support',
      'Early access to new features'
    ]
  }
]

// Game categories
const categories = [
  { id: 'pitch', name: 'Pitch Training', icon: 'music_note' },
  { id: 'rhythm', name: 'Rhythm Games', icon: 'graphic_eq' },
  { id: 'ear', name: 'Ear Training', icon: 'hearing' },
  { id: 'theory', name: 'Music Theory', icon: 'school' },
  { id: 'sight', name: 'Sight Reading', icon: 'remove_red_eye' }
]

// Games data structure
const games = ref([
  {
    id: 1,
    title: 'Perfect Pitch Trainer',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'path-to-image',
    premium: true,
    new: true
  }
])

// Computed for filtered games
const filteredGames = computed(() => {
  let filtered = games.value

  if (activeTab.value !== 'all') {
    filtered = filtered.filter(game => game.category === activeTab.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(game => 
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

const upgradeToPremium = (plan) => {
  $q.notify({
    type: 'info',
    message: `Processing ${plan.name} subscription...`
  })
}

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

const launchGame = (game) => {
  $q.notify({
    type: 'info',
    message: `Launching ${game.title}...`
  })
}
</script>

<style scoped>
.stats-card {
  transition: transform 0.3s ease;
}

.stats-card:hover {
  transform: translateY(-4px);
}

.q-card {
  border-radius: 8px;
}

.game-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.game-card:hover {
  transform: scale(1.03);
}

.premium-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
}

.pricing-card {
  height: 100%;
  transition: transform 0.2s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
}

.game-image {
  transition: transform 0.3s ease;
}

.game-card:hover .game-image {
  transform: scale(1.05);
}
</style>
