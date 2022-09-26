import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <>
            <Main>
                <img src= { Logo }></img>
                <h2>Bem vindo ao Painel!</h2>
                <input placeholder='Insira seu e-mail' />
                <input placeholder='Insira sua senha' />
                <Link to="/navigation">
                    <button>Clique Aqui</button> 
                </Link>               
            </Main>
        </>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;    
    width: 468px;

    img {
        margin-top: 70px;
        margin-left: 84px;
        margin-bottom: 44px;
        max-width: 190px;
        max-height: 44px;
        
    }

    h2 {
        font-size: 25px;
        margin-left: 59px;
        color: #00000070
    }

    input {
        width: 314px;
        height: 44px;
        margin: 6px 6px 6px 57px; 
        padding: 12px;
        border: solid 1px rgb(0, 0, 0, 0.1);
        border-radius: 5px;
    }

    button {
        width: 151px;
        height: 40px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
        padding: 8px;
        margin-left: 59px;
        background-color: #2EAFB2;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
`;

export { Form }