import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCTS_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: PRODUCTS_ROUTE,
        Component: Products
    },
    {
        path: PRODUCTS_ROUTE + '/:id',
        Component: Product
    },
]