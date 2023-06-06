import axios from "axios";

var axiosInstance = axios.create({
	baseURL: "https://puce-glamorous-cocoon.cyclic.app",
	// baseURL: "http://localhost:5000",
	/* other custom settings */
});

export default axiosInstance;

// module.exports = axiosInstance;
