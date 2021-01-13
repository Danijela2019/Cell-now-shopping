import React, { createContext, useState } from 'react';
import popularProducts from '../data/popular_data';
import { IPropsChildren, ProductContextType, IProduct } from '../types';

export const ProductsContext = createContext<ProductContextType | null>(null);

const ProductsContextProvider = ({
  children,
}: IPropsChildren): React.ReactElement => {
  const [products] = useState<IProduct[]>(popularProducts);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
