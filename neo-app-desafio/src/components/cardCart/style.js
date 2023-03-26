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
    }
    button {
        align-self: flex-end;
    }
`

export const Desc = styled.p`
    width: 577px;
`

export const Price = styled.p`
   font-size: 2rem;
   font-weight: bold;
`

