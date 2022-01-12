import {$authHost} from "./ApiService";

export default class BasketApi {

    static async getById(id) {
        return $authHost.get('baskets/'+ id)
    }

    static async addProduct(id, productId) {
        return $authHost.put('baskets/' + id + '/add/' + productId)
    }

    static async deleteProduct(id, productId) {
        return $authHost.put('baskets/' + id + '/delete/' + productId)
    }
}