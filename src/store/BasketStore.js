import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._items = []
        this._totalAmount = 0
        makeAutoObservable(this)
    }

    get totalAmount() {
        return this._totalAmount;
    }

    setTotalAmount(value) {
        this._totalAmount = value;
    }

    get items() {
        return this._items;
    }

    setItems(value) {
        this._items = value;
    }
}