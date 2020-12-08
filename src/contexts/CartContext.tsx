import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';
import {IItem} from '../types'


export const CartContext = createContext<IItem|null>(null)
// @ts-ignore
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

  type ChildrenProps= {
      children: any
  }
const CartContextProvider = (props:ChildrenProps) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increase = (payload:IItem) => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = (payload:IItem) => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = (payload:IItem) => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const removeProduct = (payload:IItem) => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        ...state
    } 

    return ( 
        <CartContext.Provider value={contextValues}>
        { props.children }
    </CartContext.Provider>
    )
}
export default CartContextProvider;