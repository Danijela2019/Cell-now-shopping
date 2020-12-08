// @ts-nocheck
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import Item from './Item'


const CartProducts = () => {

    const { cartItems } = useContext(CartContext);

    return ( 
        <div>
            <div>
                {
                    cartItems.map(product =>  <Item key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
}
 
export default CartProducts;