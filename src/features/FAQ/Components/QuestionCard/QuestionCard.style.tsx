import styled from "styled-components";

export const QuestionCardStyled = styled.div`
    padding: 16px 24px;
    min-width: 100%;
    background-color: #F5F5F5;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap:20px;

    .theme{
        font-size: 14px;
        font-weight: 500;
        color: #004E8F;
    }

    .cardHeader{
        display: flex;
        justify-content: space-between;
    }
    .cardHeader> svg{
        cursor: pointer;
    }

    .cardHeader> p{
        font-size: 16px;
        font-weight: 500;
    }

    .answer{
        color: #747474;
        font-weight: 400;
        font-size: 16px;

    }

    .icon{
        font-size: 24px;
    }

`