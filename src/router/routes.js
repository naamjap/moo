const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'signup', component: () => import('pages/SignupPage.vue') },
      { 
        path: 'verify-email', 
        component: () => import('pages/VerifyEmail.vue') 
      },
      {
        path: 'action',
        component: () => import('pages/AuthAction.vue')
      },
      { 
        path: 'dashboard', 
        component: () => import('pages/DashboardPage.vue'),
        meta: { requiresAuth: true }
      },
      { 
        path: 'terms', 
        component: () => import('pages/TermsOfService.vue') 
      },
      {
        path: '/privacy',
        component: () => import('src/pages/PrivacyPolicy.vue')
      },
      {
        path: '/about',
        component: () => import('src/pages/AboutPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
