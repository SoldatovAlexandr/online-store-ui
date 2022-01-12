import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import BasketItem from "./BasketItem";

const BasketList = (props) => {

    if (!props.products.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Your basket is empty!
            </h1>
        )
    }

    return (
        <div>
            <TransitionGroup>
                {props.products.map((product) =>
                    <CSSTransition
                        key={product.id}
                        timeout={500}
                        classNames="post">
                        <BasketItem number={product.id} product={product} add={props.add} remove={props.remove}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default BasketList;