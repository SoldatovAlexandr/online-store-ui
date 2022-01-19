import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/Navbar/Navbar";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {Spinner} from "react-bootstrap";

const App = observer(() => {

        const {user} = useContext(Context)
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            const data = JSON.parse(localStorage.getItem('user'));
            if (data) {
                user.setUser(data)
                user.setIsAuth(true)
            } else {
                user.setUser(null)
                user.setIsAuth(false)
            }
            setLoading(false)
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
