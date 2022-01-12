import {$authHost, $host} from "./ApiService";

export const createType = async (name) => {
    const {data} = await $authHost.post('api/genres/', {name})
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/genres/')
    return data
}