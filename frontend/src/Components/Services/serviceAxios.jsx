import axios from 'axios'
import { service } from './service'

const Axios = axios.create({
    baseURL: 'http://localhost:3000',
})

Axios.interceptors.request.use((request) => {
    if (service.isLogged()) {
        request.headers.Authorization = 'Bearer' + service.getToken()
    }
    return request
})

export default Axios
