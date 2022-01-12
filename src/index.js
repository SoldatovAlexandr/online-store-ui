import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ProductsStore from "./store/ProductsStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        products: new ProductsStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
