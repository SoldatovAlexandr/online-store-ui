import axios from "axios";
import {BASE_URL} from "../utils/consts";

const $host = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
    withCredentials: true
})

const $authHost = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json',
    }
})

const authInterceptor = config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        config.headers.authorization = `Bearer ${user.accessToken}`
    }
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $authHost,
    $host
}
