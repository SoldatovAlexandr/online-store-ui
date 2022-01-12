import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {registration} from "../api/UserApi";

const Registration = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory()

    const signIn = async () => {
        await registration(email, password).then(data => {
            if (data.status === 200) {
                //Todo вы успешно зарегестрировались
                history.push(LOGIN_ROUTE)
            }
            console.log(data)
        }).catch(error => {
            alert(error)
        })
    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Registration</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Input your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Input your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className={"d-flex justify-content-between mt-3 pl-3 pr-3"}>
                        <div>
                            <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={signIn}
                        >
                            Create account
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Registration;