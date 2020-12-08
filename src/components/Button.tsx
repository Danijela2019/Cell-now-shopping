import styled from '@emotion/styled'
import React from 'react'
import { ButtonProps } from '../types'


const StyledButton = styled('button')<ButtonProps>`
background-color: ${props => props.bg};
color: ${props => props.text};
width:  ${props => props.width};
height: ${props => props.height};
border-radius: 10px;
@media (max-width: 370px) {
  width:6rem;
  height:3rem;
}`


const  Button = (props: ButtonProps) => {
  return(
  <StyledButton 
      bg={props.bg} 
      text={props.text}
      width={props.width} 
      height={props.height}
      onClick={props.clicked}
      >
        {props.children}
  </StyledButton>
  )
}
export default Button;