import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../../api/TypeApi";

const CreateType = ({show, onHide}) => {

    const [name, setName] = useState('');

    const addType = () => {
        createType(name).then(data => {
            setName('')
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
                    Add new type
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
                    onClick={addType}
                >
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateType;