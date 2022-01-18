import React from 'react';
import {Card, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {BASE_URL} from "../utils/consts";

const Login = observer(() => {

        const githubAuthUrl = BASE_URL + "/oauth2/authorization/github"
        const googleAuthUrl = BASE_URL + "/oauth2/authorization/google"

        return (
            <Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 54}}>
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">Authorization</h2>
                    <div className="container unauthenticated">
                        With GitHub: <a href={githubAuthUrl}>click here</a>
                    </div>
                    <div className="container unauthenticated">
                        With Google: <a href={googleAuthUrl}>click here</a>
                    </div>
                </Card>
            </Container>
        );

    }
)
export default Login;