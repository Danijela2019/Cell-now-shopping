/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import {NavLink} from 'react-router-dom'

import Logo from '../Logo'
import Icon from '../Icon'; 
import { CartContext } from '../../contexts/CartContext';
import { NavbarContainer,NavbarWrapper,NavbarLogo, NavbarToggle, Link} from './NavbarComponents';
import './navbar.css'


const  NavItems = ({sidebar,closeMobileMenu}:any) => {
   const {itemCount}:any= useContext(CartContext);
    return ( 
        <ul className={sidebar ? "navbar_links open" : 'navbar_links'}>
            <Link onClick={closeMobileMenu}>
                <NavLink css={{textDecoration:'none', color:'#272643'}} exact to='/'>Home</NavLink>
            </Link>
            <Link onClick={closeMobileMenu}>
                <NavLink css={{textDecoration:'none', color:'#272643'}} to ='/phones'> Phones </NavLink>
            </Link>
            <Link onClick={closeMobileMenu}>
                <NavLink css={{textDecoration:'none', color:'#272643'}} to ='/accessories'> Accessories </NavLink>
            </Link>
            <Link css={{display:'flex',alignItems:'center'}}  onClick={closeMobileMenu}>
            <NavLink  css={{textDecoration:'none', color:'#272643'}}to='/checkout'> Checkout ({itemCount})</NavLink>
            <Icon color='#272643' size='40px'>
                <AiOutlineShoppingCart />
            </Icon>
            </Link>
        </ul>
    )
}

const  Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const handleClick = () => setSidebar(!sidebar);
    const closeMobileMenu = () => setSidebar(false);


    return (
       <NavbarContainer>
            < NavbarWrapper>
                <NavbarLogo>
                    <Logo/>
                </NavbarLogo>
                <NavbarToggle onClick={handleClick}>
                    <Icon size='40px'color='black'>
                        <AiOutlineMenu />
                    </Icon>
                </NavbarToggle>
            </ NavbarWrapper>
            <NavItems sidebar={sidebar} closeMobileMenu={closeMobileMenu} />
        </NavbarContainer>
    )
}

export default Navbar;

/*   <div className='navbar_logo' css={{height: '100%'}}>
                    <Logo/>
                </div> */

              