import {$authHost, $host} from "./ApiService";

export const createType = async (name) => {
    const {data} = await $authHost.post('api/genres/', {name})
    return data
}

export const updateType = async (id, name) => {
    const {data} = await $authHost.put('api/genres/' + id, {name})
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/genres/')
    return data
}

export const removeType = async (id) => {
    const {data} = await $authHost.delete('api/genres/' + id)
    return data
}