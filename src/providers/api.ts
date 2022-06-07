import axios from "axios";

const api = axios.create({
    baseURL: 'https://mysterious-sea-17642.herokuapp.com'
  });
  export default api;