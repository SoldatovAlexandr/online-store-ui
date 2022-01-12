import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductList = observer(() => {

        const {products} = useContext(Context)

        return (
            <Row className="d-flex">
                {
                    products.products.map(product =>
                        <ProductItem key={product.id} product={product}/>
                    )
                }
            </Row>
        );
    }
)

export default ProductList;