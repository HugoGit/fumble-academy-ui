import store from '@/store'

export default function auth ({ next, to }) {
  if (to.meta.requireAuth === true) {
    if (store.getters.userLogged === true) {
      next()
    } else {
      store.dispatch('authUser')
        .then(next)
        .catch(() => next('login'))
    }
  } else {
    next()
  }
}
