import {observer} from "mobx-react-lite";
import React, {useContext, useState} from "react";
import {getUser} from "../api/UserApi";
import {Context} from "../index";
import {Redirect} from "react-router-dom";

const Auth = observer(() => {

        const {user} = useContext(Context)
        const [isAuth, setIsAuth] = useState(false)

        try {
            getUser().then((data) => {
                user.setUser(data)
                user.setIsAuth(true)
               setIsAuth(true)
            })
        } catch (error) {
            return <Redirect to='/login'/>;
        }

        if(isAuth){
            return <Redirect to='/about'/>
        }

        return (
            <div>
                Вы очень успешно авторизованы!
            </div>
        );

    }
)
export default Auth