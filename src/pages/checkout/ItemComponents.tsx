import styled from '@emotion/styled';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

export const Image = styled('img')` 
max-width:50%;
height:auto;
margin: .5rem;
`

export const Header = styled('h3')`
margin:.5rem;
font-size: 1rem;
`
export const Paragraph = styled('p')`
margin: .2rem;
font-size: .7rem;
font-weight: bold;
`
export const CardContent = styled('div')`
display:flex;
flex-direction: column;
margin: 0 .5rem;
`;

export const Input = styled('input')`
    display: block;
    padding: 5px;
    margin: 0;
    width: 40px;
    border: 1px solid #272643;
    cursor: pointer;
    outline: none;
    text-align: center;`
  
export const Button = styled('button')`
    display: block;
    padding: 5px;
    margin: 0;
    width: 30px;
    border: 1px solid #272643;
    cursor: pointer;
    outline: none;
    text-align: center;
    background-color:#272643;
    color:white;
    @media (max-width: 370px) {
        width:6rem;
    }`
      
    export const ButtonWrapper = styled('div')`
    display:flex;
    justify-content:space-around;
   `
   export const EmptyCart = styled('div')`
   display:flex;
   flex-direction:column;
   align-items: center;
  `
  export const LayoutDiv =  styled('div')`
  display:flex;
  @media (max-width: 370px) {
    flex-direction:column;
    align-items: center;
}`

export const ButtonContainer = styled('div')`
display:flex;
}`
 
export const RemoveButton = styled('button')`
padding: 5px;
margin-top: 1rem;
width: 115px;
border: 1px solid #272643;
cursor: pointer;
outline: none;
text-align: center;
background-color:#272643;
color:white;
@media (max-width: 370px) {
    width:6rem;
`
export const RemoveButtonWrapper = styled('div')`
display:flex;
justify-content:space-around;
align-items:center;
` 

