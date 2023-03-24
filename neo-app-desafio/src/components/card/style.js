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
        color: ${props => props.premium ? "yellow" : "white"};
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
export const Button = styled.button`
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

    &:hover {
        background-color: #E8C30C;
    }
`