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
    /* width: 100vh; */
    height: 100vh;

    main {
        background-color: #FFF;
        display: flex;
        width: 857px;
        min-width: 400px;
        height: 512px;
        margin: auto;
        border-radius: 5px;
    }
`
export { PainelLogin }