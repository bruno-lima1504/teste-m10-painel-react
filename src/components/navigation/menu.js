import React from "react";
import styled from "styled-components";
import Logo from '../../images/logo.png'
import { Hamburguer } from "./hamburguer";


const Menu = () => {

    return (
        <Nav> 
            <img src= { Logo }/>
            <Hamburguer />            
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 260px;
    align-items: flex-end;
    background-color: #FFF;
    padding: 40px;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: auto;
        background-color: #fff;
        justify-content: space-between;
        align-items: center;        
    }

    img {
        max-width: 100%;
        text-align: center;
        margin: 50px 35px;
    }
`
export { Menu }

