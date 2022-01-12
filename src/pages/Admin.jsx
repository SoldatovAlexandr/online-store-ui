import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProduct from "../components/UI/Modals/CreateProduct";
import CreateType from "../components/UI/Modals/CreateType";

const Admin = () => {

    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    return (
        <Container className={"d-flex flex-column"}>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={() => setTypeVisible(true)}
            >
                Add type
            </Button>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={() => setProductVisible(true)}
            >
                Add product
            </Button>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;