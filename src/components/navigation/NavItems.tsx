/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {NavLink} from 'react-router-dom';

import Icon from '../Icon'; 
import { CartContext } from '../../contexts/CartContext';
import { Link ,NavbarLinks, MobileNavbar, NavlinkStyles} from './NavbarComponents';
import { NavItemProps, CartContextType } from '../../types';

const  NavItems = (props:NavItemProps) => {
    const {sidebar,closeMenu} = props;
    const {itemCount}= useContext(CartContext) as CartContextType;
    const links = (
    <React.Fragment>
        <Link onClick={closeMenu}>
            <NavLink css={NavlinkStyles}  exact to='/'>Home</NavLink>
        </Link>
        <Link onClick={closeMenu}>
            <NavLink css={NavlinkStyles} to ='/phones'> Phones </NavLink>
        </Link>
        <Link onClick={closeMenu}>
            <NavLink css={NavlinkStyles} to ='/accessories'> Accessories </NavLink>
        </Link>
        <Link css={{display:'flex',alignItems:'center'}}  onClick={closeMenu}>
        <NavLink  css={NavlinkStyles} to='/checkout'> Checkout ({itemCount})</NavLink>
            <Icon color='#272643' size='40px'>
                <AiOutlineShoppingCart />
            </Icon>
        </Link>
    </React.Fragment>
    );

    return ( 
        <React.Fragment>
            { sidebar ? <MobileNavbar>{links}</MobileNavbar> : <NavbarLinks>{links}</NavbarLinks> }
        </React.Fragment>
    );
};
 
export default NavItems;