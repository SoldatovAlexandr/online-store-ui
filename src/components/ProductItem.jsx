import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom";
import {PRODUCTS_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {
    const history = useHistory()

    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(PRODUCTS_ROUTE + '/' + product.id)}>
            <Card style={{weight: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={product.img}/>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div>{product.name}</div>
                    <div className="d-flex align-items-center">
                        <div>{product.rating}</div>
                        <Image width={20} height={20} src={star}/>
                    </div>
                </div>
                <div className={"text-black-50"}>{product.author}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;