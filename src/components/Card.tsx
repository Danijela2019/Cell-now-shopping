import React from 'react';

import { CardContainer } from './ComponentStyles';
import { CardContainerProps } from '../types';

const Card = (props: CardContainerProps): React.ReactElement => {
  return (
    <CardContainer
      text={props.text}
      bg={props.bg}
      height={props.height}
      mobHeight={props.mobHeight}
      width={props.width}
    >
      {props.children}
    </CardContainer>
  );
};

export default Card;
