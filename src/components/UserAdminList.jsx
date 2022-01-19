import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {Button, Card, Row} from "react-bootstrap";
import ErrorModal from "./UI/Modals/ErrorModal";
import {addAdmin, deleteAdmin, fetchUsers} from "../api/UserApi";
import {isAdminFromPanel} from "../utils/utils";

const UserAdminList = observer(() => {

        const {users} = useContext(Context)
        const [errorVisible, setErrorVisible] = useState(false)

        useEffect(() => {
            fetchUsers().then(data => {
                users.setUsers(data.content)
            })
        }, [])

        const addAdminRole = (user) => {
            addAdmin(user.id).then(data => {
                user.roles.push(data)
            }).catch(() => setErrorVisible(true))
        }

        const deleteAdminRole = (user) => {
            deleteAdmin(user.id).then(data => {
                const index = user.roles.indexOf(data);
                user.roles.splice(index, 1)
            }).catch(() => setErrorVisible(true))
        }

        return (
            <div className="mt-3">
                <Card
                    style={{border: '5x solid lightgray'}}
                    className="mt-3"
                >

                    {users.users.map(user =>
                        <div className="m-1 d-flex justify-content-between align-items-center">
                            <div className="ml-3">
                                {user.authType}
                            </div>
                            <div>
                                {user.login}
                            </div>
                            <div>
                                {user.roles.map(role =>
                                    <div>{role.name}</div>
                                )}
                            </div>
                            {
                                isAdminFromPanel(user) ?
                                    <Button variant="outline-danger" onClick={() => deleteAdminRole(user)}>
                                        Delete admin role
                                    </Button>
                                    :
                                    <Button variant="outline-info" onClick={() => addAdminRole(user)}>
                                        Add admin role
                                    </Button>
                            }
                        </div>
                    )}
                </Card>
                <ErrorModal show={errorVisible} onHide={() => setErrorVisible(false)}
                            error="Something went wrong"/>
            </div>
        );
    }
)
export default UserAdminList;