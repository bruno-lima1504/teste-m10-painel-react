import React from 'react'
import styled from 'styled-components'
import { Form } from './form'
import { Design } from './design'

const PainelLogin = () => {
    return (
        <Body>
            <main>
                <Form />
                <Design />
            </main>
        </Body>
    )
}

const Body = styled.main`
    display: flex;
    background-color: #FF6C22;
    width: 100%;
    height: 100vh;

    main {
        background-color: #fff;
        display: flex;
        width: 857px;        
        height: 512px;
        margin: auto;
        border-radius: 5px;
        @media (max-width: 825px) {
        max-width: 80%;
    }
    }



`
export { PainelLogin }