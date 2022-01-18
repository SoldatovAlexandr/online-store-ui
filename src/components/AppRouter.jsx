import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import {ABOUT_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {isAdmin} from "../utils/utils";

const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {user.isAuth && isAdmin(user.user) && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={ABOUT_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
