import React, { useContext } from 'react';

import ItemCard from './ItemCard';
import { ProductsContext } from '../../contexts/ProductContext';
import {CardBoardContainer} from './HomeComponents'
import { ProductContextType } from '../../types'

const PopularBoard = () => {

    const { products} = useContext(ProductsContext) as ProductContextType

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