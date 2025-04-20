<template>
    <q-page class="bg-white">
      
      
  
      <!-- Hero Section -->
      <div class="hero-section q-py-xl q-px-md  text-center">
        <div class="row items-center justify-center q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <div class="column items-center q-gutter-y-md animate__animated animate__fadeIn">
              <h1 class="text-h3 text-weight-bold text-dark">Master Your Pitch, Note by Note</h1>
              <p class="text-body1 text-grey-8 q-mb-lg">
                Fun, engaging games to perfect your singing pitch and train your musical ear.
              </p>
              <!-- Show different buttons based on auth status -->
              <template v-if="!isLoggedIn">
                <q-btn
                  unelevated
                  size="lg"
                  color="accent"
                  label="Start Training Free"
                  to="/signup"
                  class="q-px-xl shadow-4"
                  :ripple="false"
                />
                <p class="text-subtitle2 text-grey-7">Join thousands improving their musical skills!</p>
              </template>
              <template v-else>
                <q-btn
                  unelevated
                  size="lg"
                  color="accent"
                  label="Continue Training"
                  to="/dashboard"
                  class="q-px-xl shadow-4"
                  :ripple="false"
                />
                <p class="text-subtitle2 text-grey-7">Welcome back, {{ userName }}!</p>
              </template>
            </div>
         
            <q-img
              src="~assets/heroimage.png"
              alt="MnMoo in Action"
              class="rounded-borders shadow-2 animate__animated animate__zoomIn"
            
              fit="contain"
            />
          </div>
        </div>
      </div>
  
      <!-- Features Section -->
      <div class="q-py-xl q-px-md bg-white">
        <h2 class="text-h4 text-weight-medium text-center q-mb-xl">How MnMoo Helps You Sing Better</h2>
        <div class="row q-col-gutter-lg justify-center">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="col-12 col-sm-6 col-md-4 text-center q-mb-md"
          >
            <q-card
              flat
              class="q-pa-md bg-grey-1 rounded-borders shadow-2 hover-shadow animate__animated animate__fadeInUp"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <q-icon :name="feature.iconName" size="3rem" color="primary" class="q-mb-md" />
              <h3 class="text-h6 text-weight-medium q-mb-sm">{{ feature.title }}</h3>
              <p class="text-body2 text-grey-7">{{ feature.description }}</p>
            </q-card>
          </div>
        </div>
      </div>
  
      <!-- Benefits Section -->
      <div class="q-py-xl q-px-md bg-grey-2">
        <h2 class="text-h4 text-weight-medium text-center q-mb-xl">What You'll Train</h2>
        <div class="row q-col-gutter-md justify-center">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="col-6 col-sm-4 col-md-2 q-mb-md"
          >
            <q-card
              flat
              class="text-center q-pa-md full-height column items-center justify-center bg-white rounded-borders shadow-2 hover-shadow animate__animated animate__pulse"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <q-icon :name="benefit.iconName" size="2.5rem" color="primary" class="q-mb-sm" />
              <span class="text-subtitle1 text-weight-medium text-grey-9">{{ benefit.text }}</span>
            </q-card>
          </div>
        </div>
      </div>
  
      <!-- Credibility Section -->
      <div class="q-pa-lg bg-dark text-white text-center">
        <p class="text-body1 q-ma-none">
          <q-icon name="lightbulb" color="accent" class="q-mr-sm" size="sm" />
          Built on <strong>proven music theory</strong> and <strong>gamified learning techniques</strong>.
        </p>
      </div>
  
      <!-- Final CTA Section -->
      <div class="q-py-xl q-px-md text-center">
        <h2 class="text-h4 text-weight-medium text-dark q-mb-lg">
          {{ isLoggedIn ? 'Ready to Practice?' : 'Ready to Hit the Right Notes?' }}
        </h2>
        <div class="row justify-center q-gutter-md">
          <template v-if="!isLoggedIn">
            <q-btn
              unelevated
              size="lg"
              color="accent"
              label="Sign Up Free"
              to="/signup"
              class="q-px-xl shadow-4"
              :ripple="false"
            />
            <q-btn
              outline
              size="lg"
              color="primary"
              label="Login"
              to="/login"
              class="q-px-xl"
              :ripple="false"
            />
          </template>
          <template v-else>
            <q-btn
              unelevated
              size="lg"
              color="accent"
              label="Go to Dashboard"
              to="/dashboard"
              class="q-px-xl shadow-4"
              :ripple="false"
            />
          </template>
        </div>
      </div>
  
      <!-- Footer -->
      <q-footer class="bg-grey-9 text-white q-pa-md text-center">
        <div class="q-mb-sm q-gutter-x-sm">
          <q-btn
            v-for="(link, index) in footerLinks"
            :key="index"
            :to="link.to"
            flat
            dense
            size="sm"
            class="text-grey-3"
            :label="link.text"
          />
        </div>
        <p class="text-caption text-grey-5 q-ma-none">© {{ new Date().getFullYear() }} MnMoo. All rights reserved.</p>
      </q-footer>
    </q-page>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useAuthStore } from 'src/stores/auth';
  
  const authStore = useAuthStore();
  
  // Auth-related computed properties
  const isLoggedIn = computed(() => !!authStore.user);
  const userName = computed(() => authStore.user?.displayName || 'User');
  
  // Features data
  const features = [
    {
      iconName: 'sports_esports',
      title: 'Play Engaging Games',
      description: 'Practice pitch matching and ear training through interactive exercises.',
    },
    {
      iconName: 'analytics',
      title: 'Get Instant Feedback',
      description: 'See your accuracy in real-time and understand where to improve.',
    },
    {
      iconName: 'trending_up',
      title: 'Track Your Progress',
      description: 'Watch your pitch accuracy and musical ear develop over time.',
    },
  ];
  
  // Benefits data
  const benefits = [
    { iconName: 'ads_click', text: 'Pitch Accuracy' },
    { iconName: 'hearing', text: 'Ear Training' },
    { iconName: 'music_note', text: 'Interval Recognition' },
    { iconName: 'memory', text: 'Melodic Memory' },
    { iconName: 'mic', text: 'Singing Confidence' },
  ];
  
  // Footer links
  const footerLinks = [
    { text: 'About MnMoo', to: '/about' },
    { text: 'Help Center', to: '/help' },
    { text: 'Privacy Policy', to: '/privacy' },
    { text: 'Terms of Service', to: '/terms' },
  ];
  
  // Drawer state for mobile
  const drawer = ref(false);
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
  </script>
  
  <style scoped lang="css">
  
  
  /* Hover effect for cards */
  .hover-shadow:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  /* Smooth transitions for buttons */
  .q-btn {
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  .q-btn:hover {
    transform: scale(1.05);
  }
  
  /* Typography enhancements */
  .text-h3,
  .text-h4 {
    font-family: 'Poppins', sans-serif;
    letter-spacing: -0.5px;
  }
  
  .text-body1,
  .text-body2,
  .text-subtitle1,
  .text-subtitle2 {
    font-family: 'Inter', sans-serif;
  }
  
  /* Ensure cards have consistent height */
  .q-card {
    min-height: 200px;
  }
  </style>