import {$authHost, $host} from "./ApiService";

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/products/', product)
    return data
}

export const fetchProducts = async (genreId, page, size = 5) => {
    page = page - 1
    const {data} = await $host.get('api/products/', {
        params: {
            genreId, page, size
        }
    })
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/products/' + id)
    return data
}