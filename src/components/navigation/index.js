import React from "react";
import styled from "styled-components";
import { Menu } from "./menu.js";
import { Interface } from './interface.js'

const Navigation = () => {
    return (       
            <Body>
                <Menu />
                <Interface />
            </Body>       
    )
}

const Body = styled.main`    
    background-color: #E5E5E5;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {        
        flex-direction: column;
        width: 100%;        
    }
`
export { Navigation }