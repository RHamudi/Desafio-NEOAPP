import styled from 'styled-components'

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 300px;
    background-color: black;
    padding: 10px;
    border-radius: 10px;
    h2 {
        text-align: center;
        padding: 5px;
    }
    p {
        text-align: center;
    }
`

export const Image = styled.img`
    height: 500px;
    width: 300px;
    background-color: gray;
`
