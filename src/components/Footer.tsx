/** @jsxImportSource @emotion/react */
import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import {FooterColumn, FooterContainer, Anchor, FooterRow} from './ComponentStyles'
import Icon from './Icon'

const  Footer = () => {
    return (
        <FooterContainer>
            <div>
                <FooterRow>
                    <FooterColumn>
                        <h3>Brands</h3>
                        <Anchor href='#' target="_blank" rel="noopener">Samsung A22</Anchor>
                        <Anchor href='#' target="_blank" rel="noopener">Iphone10</Anchor>
                        <Anchor href='#' target="_blank" rel="noopener">Huawei SX</Anchor>
                    </FooterColumn>
                    <FooterColumn>
                        <h3>About</h3>
                        <Anchor href='#' target="_blank" rel="noopener">Locations</Anchor>
                        <Anchor href='#' target="_blank" rel="noopener">Company goal</Anchor>
                        <Anchor href='#' target="_blank" rel="noopener">Our team</Anchor>
                    </FooterColumn>
                    <FooterColumn>
                        <h3> Follow us </h3>
                        <Anchor href='#' target="_blank" rel="noopener">
                            <div css={{ marginRight: '.5rem' }}>Instagram</div>
                            <Icon size='20px' color='white'>
                                <AiFillInstagram />
                            </Icon>
                        </Anchor>
                        <Anchor href='#' target="_blank" rel="noopener">
                            <div css={{ marginRight: '.5rem' }}>Facebook</div>
                            <Icon size='20px' color='white'>
                                <AiFillFacebook />
                            </Icon>
                        </Anchor>
                        <Anchor href='#' target="_blank" rel="noopener">
                            <div css={{ marginRight: '.5rem' }}>Linkedin</div>
                            <Icon size='20px' color='white'>
                                <AiFillLinkedin />
                            </Icon>
                        </Anchor>
                    </FooterColumn>
                </FooterRow>
            </div>
            <hr />
            <div>
                <p>
                    {new Date().getFullYear()} CellNow | All rights reserved
                </p>
            </div>
        </FooterContainer>

    );
}

export default Footer;

