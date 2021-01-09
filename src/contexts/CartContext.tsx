// @ts-nocheck
import React, { createContext, useState } from 'react';
import {IItem, IPropsChildren} from '../types';



export const CartContext = createContext<IItem|null>(null)

  
const CartContextProvider = ({children}: IPropsChildren) => {
    const[state, setState]= useState({
        cartItems: [],
        itemCount: 0,
        total: 0,
        checkout:false
    })

    const addProduct = ( product ) => {
        if (!state.cartItems.find((item:IItem) => item.id === product.id)){
            let copyCartItems =[ ...state.cartItems]
            product.quantity= 1
            copyCartItems.push(product)
            const itemCount = copyCartItems.reduce((total, product) => total + product.quantity, 0);
            const total = copyCartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
                setState({
                cartItems:copyCartItems,
                itemCount,
                total,
            })
        } 
    }
    const increase = ( product ) => {
        const copyCartItems= [...state.cartItems]
        const index = copyCartItems.findIndex((item:IItem) => item.id === product.id)
        copyCartItems[index].quantity = state.cartItems[index].quantity+1
        const itemCount = copyCartItems.reduce((total, product) => total + product.quantity, 0);
        const total = copyCartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        setState({
            cartItems:copyCartItems,
            itemCount,
            total,
        })
    }
  
    const removeProduct = (product) => {
        const copyCartItems = [...state.cartItems]
        const itemCount = copyCartItems.filter((item:IItem) => item.id !== product.id).reduce((total, product) => total + product.quantity, 0);
        const total = copyCartItems.filter((item:IItem) => item.id !== product.id).reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        setState({
            cartItems: copyCartItems.filter((item:IItem) => item.id !== product.id),
            itemCount,
            total,
        })
    }

    const decrease = (product) => {
        const copyCartItems= [...state.cartItems]
        const index = copyCartItems.findIndex((item:IItem) => item.id === product.id)
        copyCartItems[index].quantity = state.cartItems[index].quantity-1
        const itemCount = copyCartItems.reduce((total, product) => total + product.quantity, 0);
        const total = copyCartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        setState({
            cartItems:copyCartItems,
            itemCount,
            total,
        })
    }
    const clearCart = () => {
        setState({
            cartItems: [],
            itemCount: 0,
            total: 0,
            checkout:false
        }
     )
    }
    


    return ( 
        <CartContext.Provider value={ {addProduct, ...state, increase, removeProduct, decrease, clearCart}}>
        { children }
    </CartContext.Provider>
    )
}
export default CartContextProvider;













    /*const [state, dispatch] = useReducer(CartReducer, initialState)

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
*/
  