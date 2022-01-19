import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";

import {deleteProductToBasket, fetchBasket, updateProductToBasket} from "../api/BasketApi";
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {BASE_URL, PRODUCTS_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import PayModal from "../components/UI/Modals/PayModal";

const Basket = observer(() => {

    const {user} = useContext(Context)
    const {basket} = useContext(Context)
    const history = useHistory()
    const [payModalVisible, setPayModalVisible] = useState(false)


    useEffect(() => {
        const userId = user.user.id;
        fetchBasket(userId).then((data) => {
            basket.setItems(data.items)
            basket.setTotalAmount(data.totalAmount)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const changeCount = (item, count) => {
        updateProductToBasket(user.user.id, item.id, count).then((data) => {
            basket.setItems(data.items)
            basket.setTotalAmount(data.totalAmount)
        }).catch((error) => {
            console.log(error)
        })
    }

    const remove = (item) => {
        deleteProductToBasket(user.user.id, item.id).then((data) => {
            basket.setItems(data.items)
            basket.setTotalAmount(data.totalAmount)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Container className={"mt-3"}>
            <h2>Корзина</h2>

            {
                basket.items.length === 0 ?
                    <div className={"m-auto"}>
                        Тут еще пусто:( Попробуйте что-нибудь <a href={PRODUCTS_ROUTE}> выбрать...</a>
                    </div>
                    :
                    <Row>
                        <Col md={8}>
                            {
                                basket.items.map(item =>
                                    <Col className={"mt-3"}>
                                        <Card style={{cursor: 'pointer'}} border={"light"}>
                                            <Row>
                                                <Col md={4}>
                                                    <Image width={150} height={150}
                                                           src={BASE_URL + "/api/upload/" + item.image}
                                                           onClick={() => history.push(PRODUCTS_ROUTE + '/' + item.id)}/>
                                                </Col>
                                                <Col md={8}>
                                                    <Row>
                                                        <Col md={6} className={"pl-3"}>
                                                            <div>
                                                                <div
                                                                    className="mt-1 d-flex justify-content-between align-items-center">
                                                                    <div>{item.name}</div>
                                                                </div>
                                                                <div className={"text-black-50"}>{item.author}</div>
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div
                                                                className="mt-1 d-flex justify-content-between align-items-center">
                                                                <div style={{fontSize: 20}}>{item.amount} руб.</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row className={"pt-3"}>
                                                        <div style={{width: 100}}>
                                                            <Form.Control
                                                                value={item.count}
                                                                onChange={e => changeCount(item, Number(e.target.value))}
                                                                type="number"
                                                            />
                                                        </div>
                                                        <div className={"pl-2"}>
                                                            <Button variant={"outline-danger"}
                                                                    onClick={() => remove(item)}>delete
                                                            </Button>
                                                        </div>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Col>
                        <Col md={4}>
                            <div className={"d-flex justify-content-center align-items-center"}>
                                <Card style={{width: 600}} className="p-5">
                                    <div className={"m-auto pt-3"} style={{fontSize: 17}}>
                                        Общая стоимость: {basket.totalAmount} руб.
                                    </div>
                                    <div className={"m-auto pt-3"}>
                                        <Button variant={"outline-success"}
                                                onClick={() => setPayModalVisible(true)}>
                                            Pay
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
            }
            <PayModal show={payModalVisible} onHide={() => setPayModalVisible(false)}/>
        </Container>
    );
});

export default Basket;