import {$authHost, $host} from "./ApiService";

export const registration = async (login, password) => {
    return await $host.post('api/users/', {login, password})
}
export const getToken = async (id) => {
    const response = await $host.get('token/' + id)
    const parsedToken = parseJwt(response.data.accessToken)
    const user = toUser(parsedToken, response)
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

const toUser = (parsedToken, response) => {
    return {
        id: parsedToken.id,
        login: parsedToken.sub,
        roles: parsedToken.roles,
        authType: parsedToken.authType,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken
    }
}

export const logoutUser = async () => {
    localStorage.removeItem('user');
}

export const fetchUsers = async (page, size = 5) => {
    page = page - 1
    const {data} = await $authHost.get('api/users/', {
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
