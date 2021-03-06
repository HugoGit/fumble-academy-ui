import axios from 'axios'
import config from '../../config/api.conf'
import store from '../store'
// import apiError from './apiError'

const instance = axios.create(config)

// Add a request interceptor
instance.interceptors.request.use((config) => {
  const user = store.getters.user
  if (user.token !== '') {
    config.headers.Authorization = 'Bearer ' + user.token
  }
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use((response) => {
  const commit = store.commit
  if (response.headers.token) {
    commit('setToken', response.headers.token)
  }

  return response
}, (error) => {
  const commit = store.commit
  if (error.response.status === 401) {
    commit('setLogout')
  }
  // apiError.handler(error.response)
  return Promise.reject(error)
})

export default instance
