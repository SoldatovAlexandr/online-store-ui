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

const authInterceptor = config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        config.headers.authorization = `Bearer ${user.accessToken}`
    }
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
