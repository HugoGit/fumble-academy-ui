import Api from '../api'

export default {
  login (data) {
    return Api.post('/auth/login', JSON.stringify(data)).then((response) => {
      return response.data
    })
  },
  auth () {
    return Api.get('/auth/me').then((response) => {
      return response.data
    })
  }
}
