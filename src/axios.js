import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: 'https://blog-backend28.herokuapp.com',
  /* other custom settings */
});

export default axiosInstance;

// module.exports = axiosInstance;