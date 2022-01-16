import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../api/ProductApi";

const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
        console.log(product)
    }, [])

    return (
        <Container className={"mt-3"}>
            <h2>{product.name}</h2>

            <hr className="style1"/>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={"http://localhost:8080/api/upload/" + product.image}/>
                </Col>
                <Col md={4}>
                    <div>
                        <Row>
                            <Col sm className={"text-black-50"}>Genre:</Col>
                            <Col sm>{product.genre}</Col>
                        </Row>
                        <Row>
                            <Col sm className={"text-black-50"}>Author:</Col>
                            <Col sm>{product.author}</Col>
                        </Row>
                        <Row>
                            <Col sm className={"text-black-50"}>Year of publication:</Col>
                            <Col sm>{product.yearOfPublication}</Col>
                        </Row>
                        <Row>
                            <Col sm className={"text-black-50"}>Age limit:</Col>
                            <Col sm>+{product.ageLimit}</Col>
                        </Row>
                    </div>
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
            <div className={"mt-3"}>
                <p>
                    {product.description}
                </p>
            </div>
        </Container>
    );
};

export default Product;