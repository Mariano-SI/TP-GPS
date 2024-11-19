import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavbarStyled } from './Navbar.style'
import decomLogo from '../../../../assets/logo decom.png'




function Navbar() {
  return (
    <NavbarStyled>
        <nav className='headerNav'>
            <img src={decomLogo} alt="" className='logo'/>
            <ul className='headerLinksContainer'>
                <li className='link'>
                    <NavLink to="/" >
                    Home
                    </NavLink>
                </li>
                <li className='link'>
                    <NavLink to="faq" >
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