import React from 'react';

const BasketItem = (props) => {

    return (
        <div>
            <div className="product__content">
                <strong>{props.product.name}</strong>
                <div>
                    Описание: {props.product.description}
                </div>
                <div>
                    Цена: {props.product.amount} руб.
                </div>
                <div>
                    Автор: {props.product.author}
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => props.add(props.product)}>+</button>
                {props.product.count}
                <button onClick={() => props.remove(props.product)}>-</button>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default BasketItem;