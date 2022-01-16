import {$authHost, $host} from "./ApiService";

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/products/', product)
    return data
}

export const updateProduct = async (product) => {
    const {data} = await $authHost.put('api/products/' + product.id, product)
    return data
}

export const uploadFile = async (formData) => {
    const {data} = await $authHost.post("api/upload/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return data
}

export const fetchProducts = async (genreId, page, size = 5, name, author) => {
    page = page - 1
    const {data} = await $host.get('api/products/', {
        params: {
            genreId, page, size, name, author
        }
    })
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/products/' + id)
    return data
}

export const removeProduct = async (id) => {
    const {data} = await $authHost.delete('api/products/' + id)
    return data
}