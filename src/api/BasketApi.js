import {$authHost, $host} from "./ApiService";


export const fetchBasket = async (id) => {
    const {data} = await $authHost.get('api/baskets/' + id)
    console.log("RESPONSE" + data)
    return data
}

export const addProductToBasket = async (userId, productId) => {
    const {data} = await $authHost.put('api/baskets/' + userId, {
        items: [
            {id: productId, count: 1}
        ]
    })
    return data
}

export const updateProductToBasket = async (userId, productId, count) => {
    const {data} = await $authHost.put('api/baskets/' + userId, {
        items: [
            {id: productId, count: count}
        ]
    })
    return data
}

export const deleteProductToBasket = async (userId, productId) => {
    const {data} = await $authHost.put('api/baskets/' + userId, {
        items: [
            {id: productId, count: 0}
        ]
    })
    return data
}

export const clearBasket = async (userId) => {
    const {data} = await $authHost.delete('api/baskets/' + userId)
    return data
}