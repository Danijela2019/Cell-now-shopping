/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';
import {
  Image,
  CardContent,
  Header,
  Paragraph,
  Button,
} from './HomeComponents';
import Card from '../../components/Card';
import { ProductProp, CartContextType, IItem } from '../../types';

const ItemCard = ({ product }: ProductProp): React.ReactElement => {
  const { addProduct, cartItems, increase } = useContext(
    CartContext
  ) as CartContextType;

  const isInCart = (product1: IItem) => {
    return cartItems!.find((item: IItem) => item.id === product1.id);
  };

  return (
    <Card
      text="black"
      bg="whitesmoke
     "
      height="180px"
      width="350px"
      mobHeight="200px"
    >
      <Image src={product.img} alt={product.alt} />
      <CardContent>
        <Header>{product.name}</Header>
        <Paragraph>{product.price} SEK</Paragraph>
        <div>
          <Button>
            <Link css={{ textDecoration: 'none', color: 'white' }} to="/">
              Details
            </Link>
          </Button>
          {isInCart(product) && (
            <Button onClick={() => increase(product)}>Add more</Button>
          )}
          {!isInCart(product) && (
            <Button onClick={() => addProduct(product)}>Add to cart</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
