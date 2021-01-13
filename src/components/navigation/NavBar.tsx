/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Logo from '../Logo';
import Icon from '../Icon';
import NavItems from './NavItems';
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  NavbarToggle,
} from './NavbarComponents';

const Navbar = (): React.ReactElement => {
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => setSidebar(!sidebar);
  const closeMobileMenu = () => setSidebar(false);
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogo>
          <Logo />
        </NavbarLogo>
        <NavbarToggle onClick={handleClick}>
          <Icon size="40px" color="black">
            <AiOutlineMenu />
          </Icon>
        </NavbarToggle>
      </NavbarWrapper>
      <NavItems sidebar={sidebar} closeMenu={closeMobileMenu} />
    </NavbarContainer>
  );
};

export default Navbar;
