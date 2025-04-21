<template>
  <q-page class="q-pa-md">
    <!-- User Profile Header -->
    <div class="row items-center justify-between q-mb-lg">
      <div class="col">
        <div class="text-h4 text-weight-bold q-mb-sm">mnmoo Games</div>
        <div class="text-subtitle1">Saturday, April 19</div>
      </div>
      <div class="col-auto">
        <q-btn flat round icon="settings" size="sm" class="q-mr-sm">
          <q-tooltip>Settings</q-tooltip>
        </q-btn>
        <q-btn flat round icon="help_outline" size="sm" class="q-mr-sm">
          <q-tooltip>Help</q-tooltip>
        </q-btn>
        <q-btn flat round icon="logout" size="sm" @click="handleLogout">
          <q-tooltip>Logout</q-tooltip>
        </q-btn>
      </div>
    </div>

    <!-- Upgrade Banner -->
    <q-banner class="bg-amber-1 q-mb-md rounded-borders">
      <template v-slot:avatar>
        <q-icon name="workspace_premium" color="amber-8" />
      </template>
      Upgrade to Access All 40+ Games. Play any game, any time, with Premium.
    </q-banner>

    <!-- Main Content -->
    <div class="row">
      <div class="col-12 col-md-9">
        <!-- Today's Games -->
        <div class="q-mb-lg">
          <h2 class="text-h6 text-weight-bold q-mb-md">Today's Games</h2>
          <div class="row q-col-gutter-md">
            <div v-for="game in todaysGames" :key="game.id" class="col-6 col-sm-3 col-md-3 col-lg-2">
              <q-card class="game-card">
                <q-img :src="game.image" :ratio="1" class="game-image">
                  <div class="absolute-top-left q-pa-xs">
                    <q-badge v-if="game.premium && !isPremium" color="accent">Premium</q-badge>
                    <q-badge v-if="game.new" color="positive">New</q-badge>
                  </div>
                </q-img>
                <q-card-section class="q-pa-sm">
                  <div class="text-subtitle2 text-weight-bold">{{ game.title }}</div>
                  <div class="text-caption text-grey-7">{{ game.category }}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>

        <!-- By Area/Badge Tabs -->
        <q-tabs
          v-model="selectedTab"
          dense
          class="text-grey q-mb-md"
          active-color="primary"
          indicator-color="primary"
          align="left"
          narrow-indicator
        >
          <q-tab name="area" label="By Area" />
          <q-tab name="badge" label="By Badge" />
        </q-tabs>

        <q-tab-panels v-model="selectedTab" animated>
          <q-tab-panel name="area">
            <!-- Area Games -->
            <div class="row q-col-gutter-md">
              <div v-for="game in games" :key="game.id" class="col-6 col-sm-3 col-md-2 col-lg-1">
                <q-card class="game-card">
                  <q-img :src="game.image" :ratio="1" class="game-image">
                    <div class="absolute-top-left q-pa-xs">
                      <q-badge v-if="game.premium && !isPremium" color="accent">Premium</q-badge>
                      <q-badge v-if="game.new" color="positive">New</q-badge>
                    </div>
                  </q-img>
                  <q-card-section class="q-pa-sm">
                    <div class="text-subtitle2 text-weight-bold">{{ game.title }}</div>
                    <div class="text-caption text-grey-7">{{ game.category }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="badge">
            <!-- Badge Games -->
            <div class="row q-col-gutter-md">
              <div v-for="game in games" :key="game.id" class="col-6 col-sm-3 col-md-2 col-lg-1">
                <q-card class="game-card">
                  <q-img :src="game.image" :ratio="1" class="game-image">
                    <div class="absolute-top-left q-pa-xs">
                      <q-badge v-if="game.premium && !isPremium" color="accent">Premium</q-badge>
                      <q-badge v-if="game.new" color="positive">New</q-badge>
                    </div>
                  </q-img>
                  <q-card-section class="q-pa-sm">
                    <div class="text-subtitle2 text-weight-bold">{{ game.title }}</div>
                    <div class="text-caption text-grey-7">{{ game.category }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>

      <!-- Streak Section (Right Sidebar) -->
      <div class="col-12 col-md-3">
        <q-card class="streak-card">
          <q-card-section>
            <div class="text-h6">Your Streaks</div>
            <div class="row items-center justify-between q-mt-sm">
              <div>Current streak: 0 days</div>
              <div>Best streak: 0 days</div>
            </div>
            <div class="row q-mt-sm">
              <div v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day" class="col">
                <div class="text-center">{{ day }}</div>
                <q-icon name="circle" color="grey" size="sm" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
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
const isPremium = ref(false) // This should come from your user data

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

// Games data structure (example)
const games = ref([
  {
    id: 1,
    title: 'Perfect Pitch Trainer',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    premium: true,
    new: true
  },
  {
    id: 2,
    title: 'Rhythm Master',
    description: 'Improve your rhythm skills',
    category: 'rhythm',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    premium: false,
    new: false
  },
  {
    id: 3,
    title: 'Ear Training Pro',
    description: 'Train your ear to recognize intervals',
    category: 'ear',
    image: 'https://cdn.quasar.dev/img/parallax3.jpg',
    premium: true,
    new: true
  },
  {
    id: 4,
    title: 'Music Theory 101',
    description: 'Learn the basics of music theory',
    category: 'theory',
    image: 'https://cdn.quasar.dev/img/parallax4.jpg',
    premium: false,
    new: false
  },
  {
    id: 5,
    title: 'Sight Reading Challenge',
    description: 'Improve your sight reading skills',
    category: 'sight',
    image: 'https://cdn.quasar.dev/img/parallax5.jpg',
    premium: true,
    new: true
  },
  {
    id: 6,
    title: 'Perfect Pitch Trainer 2',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    premium: true,
    new: true
  },
  {
    id: 7,
    title: 'Rhythm Master 2',
    description: 'Improve your rhythm skills',
    category: 'rhythm',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    premium: false,
    new: false
  },
  {
    id: 8,
    title: 'Ear Training Pro 2',
    description: 'Train your ear to recognize intervals',
    category: 'ear',
    image: 'https://cdn.quasar.dev/img/parallax3.jpg',
    premium: true,
    new: true
  },
  {
    id: 9,
    title: 'Music Theory 101 2',
    description: 'Learn the basics of music theory',
    category: 'theory',
    image: 'https://cdn.quasar.dev/img/parallax4.jpg',
    premium: false,
    new: false
  },
  {
    id: 10,
    title: 'Sight Reading Challenge 2',
    description: 'Improve your sight reading skills',
    category: 'sight',
    image: 'https://cdn.quasar.dev/img/parallax5.jpg',
    premium: true,
    new: true
  },
  {
    id: 11,
    title: 'Perfect Pitch Trainer 3',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    premium: true,
    new: true
  },
  {
    id: 12,
    title: 'Rhythm Master 3',
    description: 'Improve your rhythm skills',
    category: 'rhythm',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    premium: false,
    new: false
  },
  {
    id: 13,
    title: 'Ear Training Pro 3',
    description: 'Train your ear to recognize intervals',
    category: 'ear',
    image: 'https://cdn.quasar.dev/img/parallax3.jpg',
    premium: true,
    new: true
  },
  {
    id: 14,
    title: 'Music Theory 101 3',
    description: 'Learn the basics of music theory',
    category: 'theory',
    image: 'https://cdn.quasar.dev/img/parallax4.jpg',
    premium: false,
    new: false
  },
  {
    id: 15,
    title: 'Sight Reading Challenge 3',
    description: 'Improve your sight reading skills',
    category: 'sight',
    image: 'https://cdn.quasar.dev/img/parallax5.jpg',
    premium: true,
    new: true
  },
  {
    id: 16,
    title: 'Perfect Pitch Trainer 4',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    premium: true,
    new: true
  },
  {
    id: 17,
    title: 'Rhythm Master 4',
    description: 'Improve your rhythm skills',
    category: 'rhythm',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    premium: false,
    new: false
  },
  {
    id: 18,
    title: 'Ear Training Pro 4',
    description: 'Train your ear to recognize intervals',
    category: 'ear',
    image: 'https://cdn.quasar.dev/img/parallax3.jpg',
    premium: true,
    new: true
  },
  {
    id: 19,
    title: 'Music Theory 101 4',
    description: 'Learn the basics of music theory',
    category: 'theory',
    image: 'https://cdn.quasar.dev/img/parallax4.jpg',
    premium: false,
    new: false
  },
  {
    id: 20,
    title: 'Sight Reading Challenge 4',
    description: 'Improve your sight reading skills',
    category: 'sight',
    image: 'https://cdn.quasar.dev/img/parallax5.jpg',
    premium: true,
    new: true
  },
  {
    id: 21,
    title: 'Perfect Pitch Trainer 5',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    premium: true,
    new: true
  },
  {
    id: 22,
    title: 'Rhythm Master 5',
    description: 'Improve your rhythm skills',
    category: 'rhythm',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    premium: false,
    new: false
  },
  {
    id: 23,
    title: 'Ear Training Pro 5',
    description: 'Train your ear to recognize intervals',
    category: 'ear',
    image: 'https://cdn.quasar.dev/img/parallax3.jpg',
    premium: true,
    new: true
  },
  {
    id: 24,
    title: 'Music Theory 101 5',
    description: 'Learn the basics of music theory',
    category: 'theory',
    image: 'https://cdn.quasar.dev/img/parallax4.jpg',
    premium: false,
    new: false
  },
  {
    id: 25,
    title: 'Sight Reading Challenge 5',
    description: 'Improve your sight reading skills',
    category: 'sight',
    image: 'https://cdn.quasar.dev/img/parallax5.jpg',
    premium: true,
    new: true
  },
  {
    id: 26,
    title: 'Perfect Pitch Trainer 6',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    premium: true,
    new: true
  },
  {
    id: 27,
    title: 'Rhythm Master 6',
    description: 'Improve your rhythm skills',
    category: 'rhythm',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    premium: false,
    new: false
  },
  {
    id: 28,
    title: 'Ear Training Pro 6',
    description: 'Train your ear to recognize intervals',
    category: 'ear',
    image: 'https://cdn.quasar.dev/img/parallax3.jpg',
    premium: true,
    new: true
  },
  {
    id: 29,
    title: 'Music Theory 101 6',
    description: 'Learn the basics of music theory',
    category: 'theory',
    image: 'https://cdn.quasar.dev/img/parallax4.jpg',
    premium: false,
    new: false
  },
  {
    id: 30,
    title: 'Sight Reading Challenge 6',
    description: 'Improve your sight reading skills',
    category: 'sight',
    image: 'https://cdn.quasar.dev/img/parallax5.jpg',
    premium: true,
    new: true
  },
  {
    id: 31,
    title: 'Perfect Pitch Trainer 7',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    premium: true,
    new: true
  },
  {
    id: 32,
    title: 'Rhythm Master 7',
    description: 'Improve your rhythm skills',
    category: 'rhythm',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    premium: false,
    new: false
  },
  {
    id: 33,
    title: 'Ear Training Pro 7',
    description: 'Train your ear to recognize intervals',
    category: 'ear',
    image: 'https://cdn.quasar.dev/img/parallax3.jpg',
    premium: true,
    new: true
  },
  {
    id: 34,
    title: 'Music Theory 101 7',
    description: 'Learn the basics of music theory',
    category: 'theory',
    image: 'https://cdn.quasar.dev/img/parallax4.jpg',
    premium: false,
    new: false
  },
  {
    id: 35,
    title: 'Sight Reading Challenge 7',
    description: 'Improve your sight reading skills',
    category: 'sight',
    image: 'https://cdn.quasar.dev/img/parallax5.jpg',
    premium: true,
    new: true
  },
  {
    id: 36,
    title: 'Perfect Pitch Trainer 8',
    description: 'Master pitch recognition through fun exercises',
    category: 'pitch',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    premium: true,
    new: true
  },
  {
    id: 37,
    title: 'Rhythm Master 8',
    description: 'Improve your rhythm skills',
    category: 'rhythm',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    premium: false,
    new: false
  },
  {
    id: 38,
    title: 'Ear Training Pro 8',
    description: 'Train your ear to recognize intervals',
    category: 'ear',
    image: 'https://cdn.quasar.dev/img/parallax3.jpg',
    premium: true,
    new: true
  },
  {
    id: 39,
    title: 'Music Theory 101 8',
    description: 'Learn the basics of music theory',
    category: 'theory',
    image: 'https://cdn.quasar.dev/img/parallax4.jpg',
    premium: false,
    new: false
  },
  {
    id: 40,
    title: 'Sight Reading Challenge 8',
    description: 'Improve your sight reading skills',
    category: 'sight',
    image: 'https://cdn.quasar.dev/img/parallax5.jpg',
    premium: true,
    new: true
  }
])

// Computed property for Today's Games
const todaysGames = computed(() => games.value.slice(0, 4))

// Function to get games by category
const getGamesByCategory = (categoryId) => {
  return games.value.filter(game => game.category === categoryId)
}

// Methods
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

// Add/modify these refs:
const searchQuery = ref('')
const selectedCategory = ref('all')
const stats = ref({
  practiceSessions: 12,
  accuracyRate: '85%',
  timePracticed: '5h'
})

const selectedTab = ref('area')

// Add this computed prop:
const filteredGames = computed(() => {
  let result = games.value
  
  if (selectedCategory.value !== 'all') {
    result = result.filter(game => game.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(game => 
      game.title.toLowerCase().includes(query) || 
      game.description.toLowerCase().includes(query)
    )
  }
  
  return result
})
</script>

<style scoped>
.game-card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.game-image {
  background-size: cover;
  background-position: center;
  height: 80px; /* Reduced height for smaller images */
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

.stats-card {
  height: 100%;
  transition: transform 0.2s ease;
}

.stats-card:hover {
  transform: translateY(-4px);
}

.streak-card {
  background-color: #f5f5f5;
  border-radius: 8px;
}
</style>