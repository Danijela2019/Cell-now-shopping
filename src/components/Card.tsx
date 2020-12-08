import React from 'react';

import {CardContainer} from './ComponentStyles'
import {CardContainerProps} from '../types'


const  Card = (props:CardContainerProps) => {
  return ( 
  <CardContainer
    text={props.text}
    bg={props.bg}
    height={props.height}
    width={props.width} >
      {props.children}
  </CardContainer>
  )
}

export default Card;