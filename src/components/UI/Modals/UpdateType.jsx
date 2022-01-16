import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {updateType} from "../../../api/TypeApi";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const UpdateType = observer(({show, onHide, type}) => {

        const {products} = useContext(Context)
        const [name, setName] = useState('');

        useEffect(() => {
            setName(type.name)
        }, [type])

        const update = () => {
            updateType(type.id, name).then(() => {
                const types = products.types.slice().map((obj) => {
                    if (obj.id === type.id) {
                        return {...obj, name: name}
                    } else return obj
                })
                products.setTypes(types)
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
                        Update
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder={"Input type name"}
                        >
                        </Form.Control>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant={"outline-danger"}
                        onClick={onHide}
                    >
                        Close
                    </Button>
                    <Button
                        variant={"outline-success"}
                        onClick={update}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
)

export default UpdateType;