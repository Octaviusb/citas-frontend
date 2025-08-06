import api from './api'

export const authService = {
  async login(email, password) {
    return await api.post('/auth/login', { email, password })
  },

  async register(userData) {
    return await api.post('/auth/register', userData)
  },

  async verifyToken(token) {
    return await api.get('/auth/verify', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}