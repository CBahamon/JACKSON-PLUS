import React from 'react'
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements'
import logo from './img/logo3blanco.png';
import "./css/menu.css";
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <> 
            <Nav id='container-menu'>
                <NavLink to='/' id='vista'>
                    <img src={logo} alt='logo' id='logo' />
                    <Link id='titulo' to="/">Jackson</Link>
                    <Link id='plus' to="/">+</Link>
                </NavLink>
                <Bars />
                <NavMenu id='menu'>
                    
                   
                </NavMenu>
                <NavBtn id='botones'>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                    <NavBtnLink to='/register'>Register</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Menu
