import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: black;
    position: fixed;
    width: 100vw;
    z-index: 10000;
    div {
        padding-left: 50px;
    }
`

export const IconDiv = styled.div`
    display: flex;
    gap: 1.5rem;
    align-self: center;
`

export const Title = styled.h1`
    color: white;
`;

export const Icons = styled.span`
    font-size: 1.7rem;
    padding-right: 50px;
`
export const Logo = styled.img`
    width: 7rem;
`