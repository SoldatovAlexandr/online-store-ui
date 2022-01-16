import axios from "axios";

const baseUrl = 'http://localhost:8080/';

const $host = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-type': 'application/json',
    }
})

const $authHost = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-type': 'application/json',
    }
})

const authRequestInterceptor = config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        config.headers.authorization = `Bearer ${user.accessToken}`
    }
    return config
}

const authResponseInterceptor = config => {

}

$authHost.interceptors.request.use(authRequestInterceptor)
//$authHost.interceptors.response.use(authResponseInterceptor)

export {
    $host,
    $authHost
}
