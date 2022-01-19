import {observer} from "mobx-react-lite";
import React, {useContext, useState} from "react";
import {getToken} from "../api/UserApi";
import {Context} from "../index";
import {useHistory, useParams} from "react-router-dom";
import {ABOUT_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const Auth = observer(() => {

        const {user} = useContext(Context)
        const [isAuth, setIsAuth] = useState(false)
        const {id} = useParams()
        const history = useHistory()

        try {
            getToken(id).then((data) => {
                user.setUser(data)
                user.setIsAuth(true)
                setIsAuth(true)
            })
        } catch (error) {
            history.push(LOGIN_ROUTE)
        }

        if (isAuth) {
            history.push(ABOUT_ROUTE)
        }

        return (
            <div>
                Подождите происходит авторизация...
            </div>
        );

    }
)
export default Auth