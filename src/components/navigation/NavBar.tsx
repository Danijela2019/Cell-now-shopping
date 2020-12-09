/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {NavLink} from 'react-router-dom'

import Logo from './Logo'
import Icon from '../Icon'; 
import { CartContext } from '../../contexts/CartContext';
import { NavbarContainer, NavListWrapper} from './NavbarComponents';


const  NavItems = () => {
   
    const {itemCount}:any= useContext(CartContext);
    return ( 
        <NavListWrapper>
            <li css={{margin:'0 1rem'}}>
                <NavLink css={{textDecoration:'none', color:'#272643'}} exact to='/'>Home</NavLink>
            </li>
            <li css={{margin:'0 1rem'}}>
                <NavLink css={{textDecoration:'none', color:'#272643'}} to ='/phones'> Phones </NavLink>
            </li>
            <li css={{display:'flex',alignItems:'center'}}>
            <NavLink  css={{textDecoration:'none', color:'#272643'}}to='/checkout'> Checkout ({itemCount})</NavLink>
            <Icon color='#272643' size='40px'>
                <AiOutlineShoppingCart />
            </Icon>
            </li>
        </NavListWrapper>
    )
}

const  Navbar = () => {
    return (
       <NavbarContainer>
           <div css={{height: '100%'}}>
            <Logo/>
           </div>
            <NavItems />
        </NavbarContainer>
    )
}

export default Navbar;