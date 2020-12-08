// @ts-nocheck
/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { Link }from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';
import {Image, CardContent, Header, Paragraph ,Button} from './HomeComponents'
import Card from '../../components/Card'


const ItemCard = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
   
    return ( 
        <Card
        text='black'
        bg='whitesmoke'
        height= '200px'
        width='350px'>
            <Image src={product.img} alt={product.alt}/>
            <CardContent>
                <Header>
                    {product.name}
                </Header>
                <Paragraph>
                    {product.price} SEK
                </Paragraph>
                <div>
                    <Button>
                    <Link css={{textDecoration:'none', color:'white'}}  to="/">Details</Link>
                    </Button>
                    {isInCart(product) && 
                        <Button
                        onClick={() => increase(product)}
                        >Add more</Button>
                    }
                    {
                        !isInCart(product) && 
                        <Button
                        onClick={() => addProduct(product)}
                        >Add to cart</Button>
                    }
                </div>
            </CardContent>
        </Card>
    );
}

export default ItemCard;