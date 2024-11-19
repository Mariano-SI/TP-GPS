import styled from "styled-components";

export const HomeStyled = styled.div`
    min-height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;

    .contentContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 100px;
        max-width: 1100px;
        width: 100%;
        padding: 0 20px;
    }

    .introductionContainer{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .titleAndContent{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .titleAndContent > h2{
        font-size: 24px;
        font-weight: 700;
    }

    .titleAndContent > ol{
        padding-left: 28px;
    }
    .imageContainer {
        display: flex;
        align-items: flex-start;
    }

    .imageContainer img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`