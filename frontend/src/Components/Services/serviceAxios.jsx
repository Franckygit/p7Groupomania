import axios from 'axios'
import { service } from './service'

const Axios = axios.create({
    baseURL: 'http://localhost:3000',
})

Axios.interceptors.request.use((request) => {
    //console.log('Test numéro 1')
    if (service.isLogged()) {
        //console.log('Service isLogged')
        request.headers.Authorization = 'Bearer' + service.getToken()
    }
    return request
})

export default Axios
