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
    const user = localStorage.getItem('user')
    if (user) {
        return user
    }
    throw new Error();
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

export const fetchUsers = async (page, size = 5) => {
    page = page - 1
    const {data} = await $host.get('api/users/', {
        params: {
            page, size
        }
    })
    return data
}

export const addAdmin = async (id) => {
    const {data} = await $authHost.post('api/users/' + id + '/roles/')
    return data
}

export const deleteAdmin = async (id) => {
    const {data} = await $authHost.delete('api/users/' + id + '/roles/')
    return data
}
