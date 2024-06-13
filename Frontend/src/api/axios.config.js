import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kearny-truck-center.onrender.com/api',
  withCredentials: true
});

export default instance;