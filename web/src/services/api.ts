import axios from 'axios';

const api = axios.create({
  baseURL: `http://10.2.4.124:3333`
});

export default api;