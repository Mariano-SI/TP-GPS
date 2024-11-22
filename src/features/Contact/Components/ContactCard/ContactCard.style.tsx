import styled from "styled-components";

export const ContactCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    background-color: #FFF;
    border-radius: 14px;
    width: 100%;
    gap: 40px;

    .imageContainer{
        width:105px;
        height:105px;
        border-radius: 26px;
        object-fit: contain;
    }

    .name{
        font-size:18px;
        font-weight: 700;
    }

    .answerable{
        color: #A5A5A5;
        font-size: 14px;
        font-weight: 400;
    }

    .imageContainer img{
        max-width: 100%;
    }

    .cardHeader{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }

    .iconAndValue{
        display: flex;
        gap: 12px;
    }

    .contactsArea{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .iconContainer{
        background-color: #DCDCDC;
        border-radius: 12px;
        height: 36px;
        width: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .iconContainer > svg{
        fill: #004E8F;
    }

` 