import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/UI/TypeBar/TypeBar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes} from "../api/TypeApi";
import {fetchProducts} from "../api/ProductApi";
import Pages from "../components/UI/Pages/Pages";

const Products = observer(() => {

        const {products} = useContext(Context)

        useEffect(() => {
            fetchTypes().then(data => products.setTypes(data))
            fetchProducts(null, products.page, products.limit).then(data => {
                products.setProducts(data.content)
                console.log(data)
                products.setTotalCount(data.totalElements)
                products.setTotalPage(data.totalPages)
            })
        }, [])

        useEffect(() => {
            fetchProducts(products.selectedType.id, products.page, products.limit).then(data => {
                products.setProducts(data.content)
                console.log(data)
                products.setTotalCount(data.totalElements)
                products.setTotalPage(data.totalPages)
            })
        }, [products.page, products.selectedType])

        return (
            <Container>
                <Row>
                    <Col md={3} className={"mt-2"}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <ProductList/>
                        <Pages/>
                    </Col>
                </Row>
            </Container>
        );
    }
)

export default Products;