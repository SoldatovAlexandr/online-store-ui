import {$host} from "./ApiService";

export default class BasketApi {

    static async getById(id) {
        return $host.get('baskets/'+ id)
    }

    static async addProduct(id, productId) {
        return $host.put('baskets/' + id + '/add/' + productId)
    }

    static async deleteProduct(id, productId) {
        return $host.put('baskets/' + id + '/delete/' + productId)
    }
}