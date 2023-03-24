import styled from "styled-components";

export const DivMain = styled.div`
    padding-top: 6rem;
    display: flex;
    justify-content: center;
    gap: 5rem;
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
        p {
            padding-bottom: 5rem;
        }
        span {
            padding-bottom: 5rem;
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