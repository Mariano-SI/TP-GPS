import styled from "styled-components";

export const ContactPageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 12px;
    gap:72px;

    .contactsContainer{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap:30px
    }
`