import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hamburguer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Hamburguerstyle onClick={() => setIsOpen(!isOpen)}>            
            <span />
            <span />
            <span />
        </Hamburguerstyle>
        <Ul isOpen={isOpen}>        
            <li > <ion-icon name="cellular-outline"></ion-icon><a>Inicio</a></li>
        <Link to="/notfound">
            <li> <ion-icon name="document-text-outline"></ion-icon><a> Contatos</a></li>
            <li> <ion-icon name="analytics-outline"></ion-icon><a> Relatórios</a></li>
            <li> <ion-icon name="person-outline"></ion-icon><a>Perfil</a></li>
            <li> <ion-icon name="star-outline"></ion-icon><a>Favoritos</a></li>
        </Link>
        <Link to="/">
                <li> <ion-icon name="close-circle-outline"></ion-icon><a>Logout</a></li>
            </Link>
        </Ul>
        </>
    )
}

const Hamburguerstyle = styled.div`
    display: none;   

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    span {
    height: 2px;
    width: 25px;
    background-color: blue;
    margin-bottom: 4px;
    border-radius: 5px;
    font-weight: 20px;
    }    
`
const Ul = styled.ul`


        li{
        display: flex;
        align-items: center;
        width: 211px;
        height: 50px;
        margin-right: 14px;
        background-color: #2EAFB2;
        margin-bottom: 11px;
        border-radius: 5px;
        border: none;  
        font-size: 14px;
        color: #FFF;
        font-weight: 600;
        cursor: pointer;

        @media (max-width: 768px) { 
            margin: auto;
            margin-top: 10px;
        }
    }
    
    a {
        text-decoration: none;
    }
    ion-icon {
        margin-left: 17px;
        margin-right: 11px;       
    }

    @media (max-width: 768px) {
        overflow: hidden;        
        flex-direction: column;        
        width: 100%;
        margin:auto;
        max-height: ${({ isOpen }) => (isOpen ? "370px" : "0px")};
        transition: 0.3s ease-in;
        justify-content: center;
    }

    @media (max-width: 575px) {
        overflow: hidden;        
        flex-direction: column;        
        width: 100%;
        margin:auto;
        max-height: ${({ isOpen }) => (isOpen ? "370px" : "0px")};
        transition: 0.3s ease-in;        
    }
`
export { Hamburguer }