import React from 'react';
import {Button, Modal} from "react-bootstrap";

const ErrorModal = ({show, onHide, error}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size={"lg"}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Error
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error}
            </Modal.Body>
            <Modal.Footer>
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

export default ErrorModal;