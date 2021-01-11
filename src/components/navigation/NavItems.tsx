/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {NavLink} from 'react-router-dom'


import Icon from '../Icon'; 
import { CartContext } from '../../contexts/CartContext';
import { Link ,NavbarLinks, Open} from './NavbarComponents';
import './navbar.css'


const  NavItems = ({sidebar,closeMobileMenu}:any) => {
    const {itemCount}:any= useContext(CartContext);
    
    return ( 
        <ul className={sidebar ? "navbar_links open" : 'navbar_links'}> 
            <Link onClick={closeMobileMenu}>
                <NavLink css={{textDecoration:'none', color:'#272643'}} exact to='/'>Home</NavLink>
            </Link>
            <Link onClick={closeMobileMenu}>
                <NavLink css={{textDecoration:'nocne', color:'#272643'}} to ='/phones'> Phones </NavLink>
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
 
export default NavItems;