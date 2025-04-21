import { defineRouter } from '#q-app/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'src/stores/auth'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore()
    
    // Wait for auth to initialize before proceeding
    if (!authStore.isInitialized) {
      await new Promise(resolve => {
        const unsubscribe = authStore.$subscribe((mutation, state) => {
          if (state.isInitialized) {
            unsubscribe()
            resolve()
          }
        })
      })
    }

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthRoute = to.path === '/login' || to.path === '/signup'
    const isHomePage = to.path === '/'

    if (requiresAuth && !authStore.user) {
      next('/login')
    } else if ((isAuthRoute || isHomePage) && authStore.user) {
      next('/dashboard')
    } else {
      next()
    }
  })

  return Router
})
