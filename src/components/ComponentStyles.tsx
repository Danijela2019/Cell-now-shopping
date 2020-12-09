import styled from '@emotion/styled';

import { CardContainerProps } from '../types';

export const CardContainer = styled("div")<CardContainerProps>`
background-color: ${props => props.bg};
color: ${props => props.text};
width:  ${props => props.width};
height: ${props => props.height};
border-radius: 10px;
margin: 1rem;
display:flex;
flex-direction:row;
@media (max-width: 370px) {
  width: 100%;
  height:15rem;
  margin-bottom:2rem;
}`;

export const FooterContainer = styled('div')`
    background-color: #272643;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
    `
export const FooterColumn = styled('div')`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin:1rem;
    `
  export const Anchor = styled('a')`
    color:white;
    text-decoration:none;
    display:flex;
    &:hover {
    color: #bae8e8;
    }
    `

export const FooterRow = styled('div')`
    display: flex;
    justify-content: space-around;
    `
    export const FooterLine = styled('div')`
    display: flex;
    align-items: baseline;
    justify-content: center;
    `