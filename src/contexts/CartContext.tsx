// @ts-nocheck
import React, { createContext, useState } from 'react';
import { IItem, IPropsChildren, IProduct } from '../types';

/* interface IState {
  cartItems: IItem[];
  itemCount: number;
  total: number;
  checkout: boolean;
} */

interface CartContextType {
  total: number;
  cartItems: IItem[];
  itemCount: number;
  addProduct: (product: IProduct) => void;
  increase: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  decrease: (product: IProduct) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart') || '')
  : [];
const itemCount = storage.reduce(
  (total: number, product: IProduct) => total + product.quantity!,
  0
);
const total = storage
  .reduce(
    (total1: number, product: IProduct) =>
      total1 + product.price * product.quantity!,
    0
  )
  .toFixed(2);

const CartContextProvider = ({
  children,
}: IPropsChildren): React.ReactElement => {
  const [state, setState] = useState({
    cartItems: storage,
    itemCount,
    total,
    checkout: false,
  });

  const addProduct = (product: IProduct) => {
    if (!state.cartItems.find((item: IItem) => item.id === product.id)) {
      const copyCartItems = [...state.cartItems];
      product.quantity = 1;
      copyCartItems.push(product);
      const itemCountAddProd = copyCartItems.reduce(
        (totalReducer, productReducer) =>
          totalReducer + productReducer.quantity,
        0
      );
      const totalAddProd = copyCartItems
        .reduce(
          (totalAdd, productAdd) =>
            totalAdd + productAdd.price * productAdd.quantity,
          0
        )
        .toFixed(2);
      localStorage.setItem('cart', JSON.stringify(copyCartItems));
      setState({
        cartItems: copyCartItems,
        itemCount: itemCountAddProd,
        total: totalAddProd,
      });
    }
  };
  const increase = (product: IProduct) => {
    const copyCartItems = [...state.cartItems];
    const index = copyCartItems.findIndex(
      (item: IItem) => item.id === product.id
    );
    copyCartItems[index].quantity = state.cartItems[index].quantity + 1;
    const itemCountIncreaseProd = copyCartItems.reduce(
      (totalIncrease, productIncrease) =>
        totalIncrease + productIncrease.quantity,
      0
    );
    const totalIncreaseProd = copyCartItems
      .reduce(
        (totalIncrease1, productIncrease1) =>
          totalIncrease1 + productIncrease1.price * productIncrease1.quantity,
        0
      )
      .toFixed(2);
    localStorage.setItem('cart', JSON.stringify(copyCartItems));
    setState({
      cartItems: copyCartItems,
      itemCount: itemCountIncreaseProd,
      total: totalIncreaseProd,
    });
  };

  const removeProduct = (product: IProduct) => {
    const copyCartItems = [...state.cartItems];
    const itemCountRemoveProd = copyCartItems
      .filter((item: IItem) => item.id !== product.id)
      .reduce(
        (totalRemove, productRemove) => totalRemove + productRemove.quantity,
        0
      );
    const totalRemoveProd = copyCartItems
      .filter((item: IItem) => item.id !== product.id)
      .reduce(
        (totalRemove1, productRemove1) =>
          totalRemove1 + productRemove1.price * productRemove1.quantity,
        0
      )
      .toFixed(2);
    localStorage.setItem(
      'cart',
      JSON.stringify(
        copyCartItems.filter((item: IItem) => item.id !== product.id)
      )
    );
    setState({
      cartItems: copyCartItems.filter((item: IItem) => item.id !== product.id),
      itemCount: itemCountRemoveProd,
      total: totalRemoveProd,
    });
  };

  const decrease = (product: IProduct) => {
    const copyCartItems = [...state.cartItems];
    const index = copyCartItems.findIndex(
      (item: IItem) => item.id === product.id
    );
    copyCartItems[index].quantity = state.cartItems[index].quantity - 1;
    const itemCountDecreaseProd = copyCartItems.reduce(
      (totalDecrease, productDecrease) =>
        totalDecrease + productDecrease.quantity,
      0
    );
    const totalDecreaseProd = copyCartItems
      .reduce(
        (totalDecrease1, productDecrease1) =>
          totalDecrease1 + productDecrease1.price * productDecrease1.quantity,
        0
      )
      .toFixed(2);
    localStorage.setItem('cart', JSON.stringify(copyCartItems));
    setState({
      cartItems: copyCartItems,
      itemCount: itemCountDecreaseProd,
      total: totalDecreaseProd,
    });
  };
  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    setState({
      cartItems: [],
      itemCount: 0,
      total: 0,
      checkout: false,
    });
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        ...state,
        increase,
        removeProduct,
        decrease,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
