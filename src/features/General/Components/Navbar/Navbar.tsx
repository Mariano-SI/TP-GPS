import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { NavbarStyled } from './Navbar.style'
import decomLogo from '../../../../assets/logo decom.png'




function Navbar() {
  return (
    <NavbarStyled>
        <nav className='headerNav'>
            <Link to="/" style={{textDecoration:'none'}}>
                <h1 className='logo'>
                    <span className='green'>&#123;&#39;</span>
                        FAQ SI
                    <span className='green'>&#39;&#58;&#125;</span>
                </h1>
            </Link>
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