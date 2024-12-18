import styled from "styled-components";

export const NavbarStyled = styled.header`
    position: fixed;
    top: 0;
    padding: 30px 90px;
    background-color: #fff;
    width: 100%;

    .logo{
        color: #004E8F;
        white-space: nowrap;
        font-size: 24px;

    }
    .green{
        color: #A4D988;
    }

    .headerNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;

        @media (max-width: 1300px) {
            flex-direction: column;
            height: auto;
            gap: 4px;
        }
    }

    .headerLinksContainer{
        list-style: none;
        display: flex;
        gap:70px;
    }

    .link > a{
        font-size: 16px;
        text-decoration: none;
    }
    .link > a.active::after{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: #000;
    }

    .logo{
        max-width: 100%;
        object-fit: contain;
        width: 150px;
    }
    

`