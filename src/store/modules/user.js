import userServices from '../../api/services/user'

export default {
  state: {
    id: Number,
    email: String,
    logged: false,
    token: localStorage.getItem('token') || ''
  },

  getters: {
    user (state) {
      return {
        email: state.email,
        id: state.id,
        token: state.token
      }
    },
    token (state) {
      return state.token
    },
    userLogged (state) {
      return state.logged
    }
  },

  mutations: {
    setUser (state, { id, email }) {
      state.id = id
      state.email = email
    },
    setLogged (state) {
      state.logged = true
    },
    setLogout (state) {
      localStorage.removeItem('token')
      state.token = ''
      state.logged = false
    },
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },

  actions: {
    authUser ({ commit }) {
      return userServices.auth().then(data => {
        commit('setUser', data)
        commit('setLogged')
      })
    },
    login ({ commit }, data) {
      return userServices.login(data).then(data => {
        commit('setToken', data.token)
        commit('setLogged')
      })
    },
    register ({ commit }, data) {
      return userServices.register(data).then(data => {
        commit('setToken', data.token)
      })
    },
    logout ({ commit }) {
      commit('setLogout')
    }
  }
}
