import styled from "styled-components";


export const SearchWithoutResultStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    p{
        font-size: 16px;
        font-weight: 500;
        color: #747474;
        text-align: center;
    }

    a{
        color: #004E8F;
        text-decoration: none;
    }

    .icon{
        font-size: 70px;
        color: #004E8F;
        fill: #004E8F;
    }
`