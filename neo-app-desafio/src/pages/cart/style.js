import styled from "styled-components";

export const Section = styled.section`
    padding-top: 7rem;
    hr {
        width: 61vw;
    }
    @media (max-width: 768px) {
        hr {
        width: 100vw;
        }
    }
`

export const DivTitle = styled.div`
    display: flex;
`

export const Title = styled.h1`
    display: inline-block;
    text-align: center;
    background-color: white;
    padding: 10px;
    width: 60vw;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        margin: auto; 
    }
`
export const DivCart = styled.div`
    display: flex;
    justify-content: ${props => props.false ? "center" : ""};
    gap: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
       
    }
`

export const DivCarts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media (max-width: 768px) {
        height: 400px;
        overflow-y: scroll;
    }
`

export const Resumo = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    background-color: white;
    height: 20vw;
    padding: 10px;
    @media (max-width: 768px) {
        background: white;
        width: 70vw;
        margin: auto;
    }
`

export const ButtonAdicionar = styled.button`
    background-color: #fff000;
    border-radius: 12px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
    transition: 200ms;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
`

export const DivResumo = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;

    h1 {
        text-align: center;
    }
`

export const DivPrice = styled.div`
    display: flex !important;
    flex-direction: column;
    div {
        display: flex !important;
        justify-content: space-between !important;
    }
    input {
        margin-top: 30px;
        margin-bottom: 90px;
        width: 200px;
    }
`