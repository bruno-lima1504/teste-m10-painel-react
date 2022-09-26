import React from 'react'
import styled from 'styled-components'
import FundoLogin from '../../images/fundo-login.png'
import ImageForm from '../../images/flutuante-login.png'


const Design = () => {
    return (
        <Div>
            <img src= { FundoLogin }></img>
            
            <Img src= { ImageForm }></Img>        
        </Div>
    )
}

const Div = styled.div`
    position: relative;
    
    @media (max-width: 825px) {
        display: none;
    }
`

const Img = styled.img`
    position: absolute;
    left: -70px;
    top: 99px;
`

export { Design }