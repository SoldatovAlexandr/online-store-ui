import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {PRODUCTS_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import {login} from "../api/UserApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Login = observer(() => {

        const {user} = useContext(Context)
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        const history = useHistory()

        const signIn = async () => {
            try {
                const data = await login(email, password)
                console.log(data)
                user.setUser(data)
                user.setIsAuth(true)
                history.push(PRODUCTS_ROUTE)
            }catch (e){
                alert(e.response.data.message)
            }
        }

        return (
            <Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 54}}>
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">Authorization</h2>
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
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <Row className={"d-flex justify-content-between mt-3 pl-3 pr-3"}>
                            <div>
                                <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            <Button
                                variant={"outline-success"}
                                onClick={signIn}
                            >
                                Login
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
        );

    }
)
export default Login;