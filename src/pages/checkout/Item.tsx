// @ts-nocheck
/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import Card from '../../components/Card'
import Icon from '../../components/Icon'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import {ProductProp} from '../../types'
import {Image,
    CardContent,
    Header,Paragraph,
    Button,
    Input,
    LayoutDiv,
     ButtonContainer,
     RemoveButton,
     RemoveButtonWrapper}
from './ItemComponents'
 

const Item = ({product}:ProductProp) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <Card  
            bg="white"
            text="black"
            width="300px"
            height="180px"
            >
            <LayoutDiv>
                <Image
                    alt={product.alt}
                    src={product.img}/>
                <CardContent>
                    <Header>{product.name}</Header>
                    <Paragraph>Price: {product.price} SEK </Paragraph>
                    <ButtonContainer>
                        <Button
                        onClick={() => increase(product)}>
                            <Icon size='20px' color='white'>
                                <AiOutlinePlus />
                            </Icon>
                        </Button>
                        <Input value={product.quantity} readOnly={true} type="text" min="0"/>
                        <Button
                            onClick={() => product.quantity <= 1 ? removeProduct(product) : decrease(product)}>
                            <Icon size='20px' color='white'>
                                <AiOutlineMinus />
                            </Icon>
                        </Button>
                    </ButtonContainer>
                    <RemoveButton onClick={() => removeProduct(product)}>
                        <RemoveButtonWrapper> 
                            <Icon size='20px' color='white'>
                                <AiOutlineDelete />
                            </Icon>
                                Remove
                        </RemoveButtonWrapper>
                    </RemoveButton>
                </CardContent>
            </LayoutDiv>
        </Card>
    );
}

export default Item;


