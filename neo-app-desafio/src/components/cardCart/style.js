import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    max-width: 60vw;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    img {
        width: 200px;
    }
    @media (max-width: 768px) {
        div {
            display: flex;
        }
        img {
            width: 100px;
            margin: auto;
        }
        display: flex;
        flex-direction: column;
        max-width: 100vw;
    }
`

export const DivCard = styled.div`
    display: flex;
    div {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    h1 {
        text-align: center;
        @media (max-width: 768px) {
            font-size: 0.9rem;
        }
    }
    button {
        align-self: flex-end;
    }
`

export const Desc = styled.p`
    width: auto;
    @media (max-width: 768px) {
        width: auto;
        font-size: 0.9rem;
    }
`

export const Price = styled.p`
   font-size: 2rem;
   font-weight: bold;
`
export const ButtonDelete = styled.button`
    background-color: #FFFFFF;
    border: 1;
    border-radius: .5rem;
    box-sizing: border-box;
    color: #111827;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1.25rem;
    padding: 0.4rem 1rem;
    text-align: center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
`