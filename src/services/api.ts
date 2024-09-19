import axios from 'axios';

axios.defaults.headers.post['Authorization'] = `Bearer ${process.env.API_TOKEN}`;

axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = axios.create({ baseURL:  process.env.API_URL });

export { api };