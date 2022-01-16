import React, {createContext, useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/Navbar/Navbar";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {check} from "./api/UserApi";
import {Spinner} from "react-bootstrap";

const App = observer(() => {

        const {user} = useContext(Context)
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            check().then(() => {
                user.setIsAuth(true)
            }).catch(()=>{
                user.setIsAuth(false)
            }).finally(() => setLoading(false))
        }, [])

        if (loading) {
            return <Spinner animation={"grow"}/>
        }

        return (
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        )
    }
)

export default App;
