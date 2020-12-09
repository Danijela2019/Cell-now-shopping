
import React, { createContext, useState} from 'react';
import popularProducts from '../data/popular_data';
import {IPropsChildren} from '../types'

// @ts-ignore
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}: IPropsChildren) => {
const [products] = useState(popularProducts);

    return ( 
        <ProductsContext.Provider value={{products}}>
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;