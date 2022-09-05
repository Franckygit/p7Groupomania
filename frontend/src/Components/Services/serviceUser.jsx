import Axios from './serviceAxios'

let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (userId) => {
    return Axios.get('/users/' + userId)
}

export const serviceUser = {
    getAllUsers,
    getUser,
}
