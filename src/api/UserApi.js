import {$authHost, $host} from "./ApiService";

export const registration = async (login, password) => {
    return await $host.post('api/users/', {login, password})
}

export const login = async (login, password) => {
    const response = await $host.post('api/login', {login, password})
    const parsedToken = parseJwt(response.data.accessToken)
    const user = getUser(parsedToken, response)
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

export const check = async () => {
    const response = await $authHost('/auth')
    const parsedToken = parseJwt(response.data.accessToken)
    const user = getUser(parsedToken, response)
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

const getUser = (parsedToken, response) => {
    return {
        id: parsedToken.id,
        login: parsedToken.sub,
        roles: parsedToken.roles,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken
    }
}