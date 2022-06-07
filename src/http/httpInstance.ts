import axios from 'axios'

const baseURL = `https://swapi.dev`
const timeout = 5000

const axiosInstance = axios.create({
    baseURL,
    timeout,
})

export default axiosInstance