import styled from "styled-components";

export const FaqStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 12px;
    gap:20px;
    @media (max-width: 768px){
        padding: 0 30px;
        margin-top: 160px;
    }
    
    .questionsContainer{
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        margin-bottom: 70px;
    }
    .inputAndButton{
        width: 100%;
        padding: 12px;
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: center;
    }
    .inputAndButton > input{
        width: 100%;
        display: flex;
        padding: 8px;
        border-radius: 8px;
    }
    .inputAndButton > div{
        cursor: pointer;
    }

    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #F5F5F5;
        text-align: center;
        padding: 12px;
    }
`