import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4-oPxoylLsfNkfIGiZacdCZZ0Qajnc_0LtH3HHKcv_0'
  }
})
