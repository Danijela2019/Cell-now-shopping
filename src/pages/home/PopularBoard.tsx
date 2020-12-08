// @ts-nocheck
import React, { useContext } from 'react';

import ItemCard from './ItemCard';
import { ProductsContext } from '../../contexts/ProductContext';
import {CardBoardContainer} from './HomeComponents'

const PopularBoard = () => {

    const { products} = useContext(ProductsContext)

    return (
        <CardBoardContainer>
            {products.map(product => (
                        <ItemCard key={product.id} product={product}/>
                    ))
            }
        </CardBoardContainer>
            
     );
}


 
export default PopularBoard;