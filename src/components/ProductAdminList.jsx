import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {Button, Card, Form, FormControl} from "react-bootstrap";
import {fetchTypes} from "../api/TypeApi";
import ErrorModal from "./UI/Modals/ErrorModal";
import {fetchProducts, removeProduct} from "../api/ProductApi";
import Pages from "./UI/Pages/Pages";
import UpdateProduct from "./UI/Modals/UpdateProduct";

const ProductAdminList = observer(() => {

        const {products} = useContext(Context)
        const [selectedProduct, setSelectedProduct] = useState({
            name: '',
            amount: 0,
            description: '',
            ageLimit: 0,
            author: '',
            yearOfPublication: 0
        })
        const [errorVisible, setErrorVisible] = useState(false)
        const [updateProductVisible, setUpdateProductVisible] = useState(false)
        const [nameSearchString, setNameSearchString] = useState('')
        const [authorSearchString, setAuthorSearchString] = useState('')

        useEffect(() => {
            fetchTypes().then(data => products.setTypes(data))
            fetchProducts(null, products.page, products.limit, nameSearchString, authorSearchString).then(data => {
                products.setProducts(data.content)
                products.setTotalCount(data.totalElements)
                products.setTotalPage(data.totalPages)
            })
        }, [products.page, nameSearchString, authorSearchString])

        const remove = (product) => {
            removeProduct(product.id).then(() => {
                products.setProducts(products.products.filter(t => t.id !== product.id))
            }).catch(error => {
                setErrorVisible(true)
            })
        }

        const update = (product) => {
            setSelectedProduct(product)
            setUpdateProductVisible(true)
        }

        return (
            <div className="mt-3">
                <div className="d-flex justify-content-start">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Name"
                            className="me-2"
                            aria-label="Search"
                            value={nameSearchString}
                            onChange={(e) => setNameSearchString(e.target.value)}
                        />
                    </Form>
                    <Form className="d-flex ml-3">
                        <FormControl
                            type="search"
                            placeholder="Author"
                            className="me-2"
                            aria-label="Search"
                            value={authorSearchString}
                            onChange={(e) => setAuthorSearchString(e.target.value)}
                        />
                    </Form>
                </div>
                <Card
                    style={{border: '5x solid lightgray'}}
                    className="mt-3"
                >
                    <></>
                    {products.products.map(product =>
                        <div className="m-1 d-flex justify-content-between align-items-center">
                            <div className="ml-3">
                                <div>{product.name}</div>
                                <div style={{color:"gray"}}>{product.author}</div>
                            </div>
                            <div>
                                <Button variant="outline-info" onClick={() => update(product)}
                                        className="mr-3">Update</Button>
                                <Button variant="outline-danger" onClick={() => remove(product)}>Remove</Button>
                            </div>
                        </div>
                    )}
                </Card>
                <Pages/>
                <ErrorModal show={errorVisible} onHide={() => setErrorVisible(false)}
                            error="Something went wrong"/>
                <UpdateProduct show={updateProductVisible} onHide={() => setUpdateProductVisible(false)}
                               product={selectedProduct}/>
            </div>
        );
    }
)
export default ProductAdminList;