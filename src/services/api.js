import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://cors-anywhere.herokuapp.com/http://132.255.216.119:8444/',
  baseURL: 'http://132.255.216.119:8444/',
});

export default api;
