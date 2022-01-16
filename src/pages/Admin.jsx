import React, {useState} from 'react';
import {Button, Container, Tab, Tabs} from "react-bootstrap";
import CreateProduct from "../components/UI/Modals/CreateProduct";
import CreateType from "../components/UI/Modals/CreateType";
import TypeAdminList from "../components/TypeAdminList";
import ProductAdminList from "../components/ProductAdminList";
import UserAdminList from "../components/UserAdminList";

const Admin = () => {

    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    return (
        <Container className={"d-flex flex-column"}>

            <Tabs defaultActiveKey="product" id="uncontrolled-tab-example" className="mt-3">
                <Tab eventKey="type" title="Types">
                    <TypeAdminList/>
                    <Button
                        variant={"outline-dark"}
                        className={"mt-4 p-2"}
                        onClick={() => setTypeVisible(true)}
                    >
                        Add type
                    </Button>
                </Tab>
                <Tab eventKey="product" title="Products">
                    <ProductAdminList/>
                    <Button
                        variant={"outline-dark"}
                        className={"mt-4 p-2"}
                        onClick={() => setProductVisible(true)}
                    >
                        Add product
                    </Button>
                </Tab>
                <Tab eventKey="user" title="Users">
                    <UserAdminList/>
                </Tab>
            </Tabs>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;