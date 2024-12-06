import styled from "styled-components";

export const HomeStyled = styled.div`
    min-height: calc(100vh - 304px);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    padding-bottom: 100px;

    .contentContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 100px;
        max-width: 1100px;
        width: 100%;
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        .contentContainer{
            grid-template-columns: 1fr;
            margin-top: 80px;
        }

        .introductionContainer{
            grid-row: 1;
        }
     
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

    .support{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .supportlogos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    justify-items: center;
    margin-top: 20px;
  }

  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
  }

  .logoContainer img {
    max-width: 85%;
    max-height: 100%;
    object-fit: contain;
  }
`