import styled from '@emotion/styled';

import cover from '../../assets/cover.jpg';

export const Image = styled('img')` 
max-width:50%;
height:auto;
margin: .5rem;
`;
export const CardContent = styled('div')`
display:flex;
flex-direction: column;
margin: 0 .5rem;
`;
export const Header = styled('h3')`
margin:.5rem;
font-size: 1rem;
`;
export const Paragraph = styled('p')`
margin: .2rem;
font-size: .7rem;
font-weight: bold;
`;
export const Button = styled('button')`
background-color: #272643;
color:white;
width: 6rem;
height:2rem;
margin:.5rem;
border-radius: 10px;
cursor: pointer;
`;
export const Background = styled('div')`
background-image: url(${cover});
width:100%;
height:75vh;
background-position: center;
background-attachment: fixed;
background-size: cover;
`;
export const CoverHeader = styled('h1')`
fontSize: 3rem, 
margin-bottom:'-1rem'
`;
export const LogoWrapper = styled('h1')`
height: 30%;
 margin-top:4rem
`;
export const CoverParagraph = styled('p')`
font-weight: bolder;
`;
export const CardBoardContainer = styled("div")`
  background-color:#ffffff;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  margin: 1rem;
  justify-content:space-around;
  aligh-items:center;
  `;
  export const BestOffer  = styled("h1")`
  text-align: left;
  margin-left: 2rem;
  `;