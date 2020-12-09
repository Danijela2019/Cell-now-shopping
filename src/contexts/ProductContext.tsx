import React, { createContext, useState } from 'react';
import popularProducts from '../data/popular_data';
// @ts-ignore
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}: any) => {

    const [products] = useState(popularProducts);

    return ( 
        <ProductsContext.Provider value={{products}}>
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;