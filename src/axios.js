import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: 'https://puce-glamorous-cocoon.cyclic.app',
  /* other custom settings */
});

export default axiosInstance;

// module.exports = axiosInstance;
