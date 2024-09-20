import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

axios.defaults.headers.post['Content-Type'] = 'application/json'

const api = axios.create({ baseURL: apiUrl })

export { api }
