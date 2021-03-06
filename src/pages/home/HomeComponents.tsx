import styled from '@emotion/styled';

import cover from '../../assets/cover.jpg';

export const Image = styled('img')`
  max-width: 50%;
  height: auto;
  margin: 0.5rem;
`;
export const CardContent = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
`;
export const Header = styled('h3')`
  margin: 0.5rem;
  font-size: 1rem;
`;
export const Paragraph = styled('p')`
  margin: 0.2rem;
  font-size: 0.7rem;
  font-weight: bold;
`;
export const Button = styled('button')`
  background-color: #272643;
  color: white;
  width: 6rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const Background = styled('div')`
  background-image: url(${cover});
  width: 90%;
  margin: auto;
  height: 80vh;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;
export const CoverHeader = styled('h1')`
  font-size: 3rem;
  margin-bottom: -1rem;
`;
export const LogoWrapper = styled('h1')`
  height: 30%;
  margin-top: 4rem;
`;
export const CoverParagraph = styled('p')`
  font-weight: bolder;
`;
export const CardBoardContainer = styled('div')`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem;
  justify-content: space-around;
  align-items: center;
`;
export const BestOffer = styled('h1')`
  text-align: left;
  margin-left: 3rem;
`;
