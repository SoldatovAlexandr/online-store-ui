import React from 'react';
import {Container} from "react-bootstrap";

const About = () => {
    return (
        <Container className={"d-flex flex-column mt-4 p-2"}>
            <h2>
                Тема номер 2
            </h2>
            <div style={{fontSize:20}}> Интернет магазин, каталог товаров, без вложенности, корзина, авторизация через соцсети</div>
        </Container>
    );
};

export default About;