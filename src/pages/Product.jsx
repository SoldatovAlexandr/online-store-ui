import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../api/ProductApi";

const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])

    return (
        <Container className={"mt-3"}>
            <h2>{product.name}</h2>
            <hr className="style1"/>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={product.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center justify-content-around">
                        {product.description}
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className={"d-flex flex-column align-items-center justify-content-around"}
                        style={{weight: 300, height: 300, fontSize: 32, border: '5x solid lightgray'}}
                    >
                        <h3>
                            {product.amount} руб.
                        </h3>
                        <Button variant={"outline-dark"}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;