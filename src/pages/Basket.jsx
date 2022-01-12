import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import BasketApi from "../api/BasketApi";
import BasketList from "../components/BasketList";

const Basket = () => {

    /* const [user, setUser] = useState(AuthService.getCurrentUser())
     const [totalAmount, setTotalAmount] = useState()
     const [products, setProducts] = useState([])
     const [fetchBasket, isBasketLoading, basketError] = useFetching(async () => {
         const response = await BasketApi.getById(user.id);
         setTotalAmount(response.data.totalAmount)
         setProducts(response.data.products)
     })

     useEffect(() => {
         fetchBasket()
     }, [])

     const removeProduct = async (product) => {
         const response = await BasketApi.deleteProduct(user.id, product.id)
         setTotalAmount(response.data.totalAmount)
         setProducts(response.data.products)
     }

     const addProduct = async (product) => {
         const response = await BasketApi.addProduct(user.id, product.id)
         setTotalAmount(response.data.totalAmount)
         setProducts(response.data.products)
     }

     const pay = async () => {
         console.log("Процесс оплаты")
     }*/

    return (
        <div>
            Корзина
        </div>
        /*<div>
            <h1 style={{textAlign: 'center'}}>
                Basket
            </h1>

            <div>
                Ваш список покупок:
            </div>
            <BasketList products={products} add={addProduct} remove={removeProduct}/>
            <div>
                Total amount: {totalAmount}
            </div>
            <div>
                <button onClick={pay}>
                    Перейти к оплате
                </button>
            </div>
        </div>*/
    );
};

export default Basket;