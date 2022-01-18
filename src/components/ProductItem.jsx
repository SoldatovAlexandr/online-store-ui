import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {BASE_URL, PRODUCTS_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {
    const history = useHistory()

    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(PRODUCTS_ROUTE + '/' + product.id)}>
            <Card style={{weight: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={BASE_URL + "/api/upload/" + product.image}/>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div>{product.name}</div>
                </div>
                <div className={"text-black-50"}>{product.author}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;