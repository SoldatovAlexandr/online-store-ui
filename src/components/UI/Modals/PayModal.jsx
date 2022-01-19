import React, {useContext, useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {clearBasket} from "../../../api/BasketApi";

const PayModal = observer(({show, onHide}) => {

        const {user} = useContext(Context)
        const {basket} = useContext(Context)
        const [card, setCard] = useState('');
        const [year, setYear] = useState('');
        const [month, setMonth] = useState('');
        const [ccv, setCcv] = useState('');

        const pay = () => {
            clearBasket(user.user.id).then((data) => {
                basket.setItems(data.items)
                basket.setTotalAmount(data.totalAmount)
                onHide()
            })
        }

        return (
            <Modal
                show={show}
                onHide={onHide}
                size={"lg"}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className={"mx-auto"}>
                            Сумма к оплате {basket.totalAmount} рублей.
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Control
                            value={card}
                            onChange={e => setCard(e.target.value)}
                            placeholder={"Enter card number"}
                            type={"number"}
                        >
                        </Form.Control>
                        <Row className={"pt-3"}>
                            <Col md={4}>
                                <Form.Control
                                    value={month}
                                    onChange={e => setMonth(e.target.value)}
                                    placeholder={"MM"}
                                    type={"number"}
                                >
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={year}
                                    onChange={e => setYear(e.target.value)}
                                    placeholder={"YY"}
                                    type={"number"}
                                >
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={ccv}
                                    onChange={e => setCcv(e.target.value)}
                                    placeholder={"CCV"}
                                    type={"number"}
                                >
                                </Form.Control>
                            </Col>
                        </Row>
                    </Form>
                    <div style={{color: "gray"}} className={"pl-3 pr-2"}>
                        Это просто мок... Введите любую карту, которую вы хотите и возможно когда-нибудь появится реальная
                        оплата...
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant={"outline-success"}
                        onClick={() => pay()}
                    >
                        Pay
                    </Button>
                    <Button
                        variant={"outline-danger"}
                        onClick={onHide}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
)

export default PayModal;