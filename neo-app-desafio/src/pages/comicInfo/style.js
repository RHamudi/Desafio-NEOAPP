import styled from "styled-components";

export const DivMain = styled.div`
    padding-top: 7.5rem;
    display: flex;
    justify-content: center;
    gap: 5rem;
    background-color: white;
   
    hr{
        margin-bottom: 3rem;
    }
    img {
        width: 22rem;
    }
    div{
        display: flex;
        flex-direction: column;
        width: 40vw;
        h1{
            font-weight: bold;
            font-size: 2rem;
        }
        p {
            padding-bottom: 5rem;
            font-weight: bold;
        }
        span {
            padding-bottom: 5rem;
            font-weight: bold;
            font-size: 2rem;
        }
        button {
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

        }
    }
    
`