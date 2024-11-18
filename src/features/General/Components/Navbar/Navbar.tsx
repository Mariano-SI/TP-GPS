import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavbarStyled } from './Navbar.style'



function Navbar() {
  return (
    <NavbarStyled>
        <nav className='headerNav'>
            <h1>NOME</h1>
            <ul className='headerLinksContainer'>
                <li className='link'>
                    <NavLink to="/" >
                    Home
                    </NavLink>
                </li>
                <li className='link'>
                    <NavLink to="/faq" >
                    FAQ
                    </NavLink>
                </li>
                <li className='link'>
                    <NavLink to="/contact" >
                    Contatos
                    </NavLink>
                </li>
            </ul>
        </nav>
    </NavbarStyled>
  )
}

export default Navbar