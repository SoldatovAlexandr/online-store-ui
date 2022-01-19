import React from 'react';
import {Card, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {BASE_URL} from "../utils/consts";

const Login = observer(() => {

        const githubAuthUrl = BASE_URL + "/oauth2/authorization/github"
        const googleAuthUrl = BASE_URL + "/oauth2/authorization/google"
        const facebookAuthUrl = BASE_URL + "/oauth2/authorization/facebook"

        return (
            <Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 54}}>
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">Authorization</h2>
                    <div className={"m-auto pt-3 "}>
                        <Row className={"pb-2"}>
                            <a href={githubAuthUrl} className="btn btn-lg btn-secondary" style={{width:300}}>
                                Continue with GitHub
                            </a>
                        </Row>
                        <Row className={"pb-2"}>
                            <a href={googleAuthUrl} className="btn btn-lg btn-secondary" style={{width:300}}>
                                Continue with Google
                            </a>
                        </Row>
                        <Row className={"pb-2"}>
                            <a href={facebookAuthUrl} className="btn btn-lg btn-secondary"style={{width:300}}>
                                Continue with Facebook
                            </a>
                        </Row>
                    </div>
                </Card>
            </Container>
        );

    }
)
export default Login;