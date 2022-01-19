import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    AUTH_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    PRODUCTS_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Auth from "./components/Auth";

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: AUTH_ROUTE + '/:id',
        Component: Auth
    },
    {
        path: PRODUCTS_ROUTE,
        Component: Products
    },
    {
        path: PRODUCTS_ROUTE + '/:id',
        Component: Product
    }
]