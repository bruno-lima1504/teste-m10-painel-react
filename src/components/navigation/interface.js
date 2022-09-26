import React from "react";
import styled from "styled-components";
import { Items } from "./items";

const Interface = () => {
    return (
        <Main>
            <header>
                <h1>Olá Usuário</h1>
                <hr />
            </header>

            <section>
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
            </section>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 48px;

    hr {
        width: 100%;      
    }

    section {
        display: flex;        
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export { Interface }