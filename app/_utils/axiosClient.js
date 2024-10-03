const { default: axios } = require("axios");
let baseURL = "http://localhost:1337/api";
let apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `bearer ${apiKey}`,
  },
});
export default axiosClient;
