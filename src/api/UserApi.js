import {$host} from "./ApiService";

export const registration = async (login, password) => {
    return await $host.post('api/users/', {login, password})
}

export const getUser = async () => {
    const response = await $host.get('/users/')
    const data = response.data
    localStorage.setItem('user', data);
    return data;
}

export const logoutUser = async () => {

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
    const {data} = await $host.post('api/users/' + id + '/roles/')
    return data
}

export const deleteAdmin = async (id) => {
    const {data} = await $host.delete('api/users/' + id + '/roles/')
    return data
}
