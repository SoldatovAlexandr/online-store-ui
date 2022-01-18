import React, {useContext, useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom"
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../../utils/consts";
import {logoutUser} from "../../../api/UserApi";
import {isAdmin} from "../../../utils/utils";

const NavBar = observer(() => {

        const {user} = useContext(Context)
        const history = useHistory()

        const logout = () => {
            logoutUser().then(() => {
                user.setUser({})
                user.setIsAuth(false)
                localStorage.removeItem('user');
            })
        }

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/about">Online-store</Navbar.Brand>

                        {
                            user.isAuth ?
                                <Nav className="me-auto">
                                    <Nav.Link href="/products">Products</Nav.Link>
                                    <Nav.Link href="/baskets">Basket</Nav.Link>
                                    {isAdmin(user.user) &&
                                    < Button
                                        variant={"outline-light"}
                                        onClick={() => history.push(ADMIN_ROUTE)}
                                    >
                                        Admin
                                    </Button>
                                    }
                                    <Button
                                        variant={"outline-light"}
                                        onClick={() => logout()}
                                    >
                                        Logout
                                    </Button>
                                </Nav>
                                :
                                <Nav className="me-auto">
                                    <Button
                                        variant={"outline-light"}
                                        onClick={() => history.push(LOGIN_ROUTE)}
                                    >
                                        Login
                                    </Button>
                                </Nav>
                        }
                    </Container>
                </Navbar>
            </div>
        );
    }
)

export default NavBar;