import React from "react";
import styled from "styled-components";
import ImgComponent from '../../images/img-component.png';

const Items = () => {
    return(
            <Section>
                <div>
                    <img src= { ImgComponent } alt="imagem de fundo" ></img>
                    <Span > <span><ion-icon name="calendar-clear-outline"></ion-icon></span> <p>2min atrás</p> </Span>                    
                </div>                      
                <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                <Legenda>Lorem Ipsum is simply dummy text of the printing and typesettin.</Legenda>
            </Section>
    )
}

const Section = styled.section`
    background-color: #fff;
    max-width: 500px;    
    height: 228px;
    border-radius: 6px;
    margin: 21px 24px 0px 0px;

    div {
        position: relative;
        max-width: 100%;
    }
    

    img {
        max-width: 100%;
        display: block;
        border-radius: 6px;
        margin: 15px 16px 16px 19px;
                
        @media (max-width: 600px) {
            width: 300px;
        }
        @media (max-width: 438px) {
            width: 250px;
        } 

        @media (max-width: 390px) {
            width: 230px;
        }        
    }
    
    h3 {
        font-weight: 700;
        margin-left: 19px;
        font-size: 14px;
    }
`
const Legenda = styled.p`
        margin-left: 19px;
        font-weight: 400;
        font-size: 12px;     
`
const Span = styled.span`
    width: 102px;
    height: 27px;
    position: absolute;
    left: 350px;
    top: 25px;
    background-color: rgba(0, 0, 0, 0.5) ;
    color: #fff;    
    display: flex;
    justify-content: space-around;
    align-content: center;
    border-radius: 3px;

    @media (max-width: 900px) {
        display: none;
    }

    p{  
        height: 16px;
        font-size: 11px;
        margin-top: 6px;
    }

    span {
        margin-top: 5px;
    }
`
export { Items }