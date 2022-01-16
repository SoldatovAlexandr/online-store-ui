import {makeAutoObservable} from "mobx";

export default class ProductsStore {
    constructor() {
        this._types = []
        this._products = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        this._totalPage = 0
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setTotalPage(totalPage) {
        this._totalPage = totalPage
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimit(limit) {
        this._limit = limit
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setProducts(products) {
        this._products = products
    }

    get products() {
        return this._products
    }

    get types() {
        return this._types
    }

    get selectedType() {
        return this._selectedType
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get totalPage() {
        return this._totalPage
    }
}