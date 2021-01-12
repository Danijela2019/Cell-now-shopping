//@ts-nocheck
import React, { createContext, useState } from 'react';
import { IItem, IPropsChildren, IProduct } from '../types';


interface IState {
    cartItems: IItem[];
    itemCount: number;
    total: number;
    checkout: boolean;
}

interface CartContextType {
    total:number;
    cartItems: IItem[];
    itemCount: number;
    addProduct: (product: IProduct) => void;
    increase : (product: IProduct) => void;
    removeProduct: (product: IProduct) => void;
    decrease: (product: IProduct) => void;
    clearCart: () =>void;
}

export const CartContext = createContext<CartContextType|null>(null)

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')||'') : [];
const itemCount = storage.reduce((total:number, product:IProduct) => total + product.quantity!, 0);
const total = storage.reduce((total: number, product:IProduct) => total + product.price * product.quantity!, 0).toFixed(2);

const CartContextProvider = ({children}: IPropsChildren) => {
    const[state, setState]= useState({
        cartItems: storage,
        itemCount,
        total,
        checkout:false
    })

    const addProduct = ( product: IProduct ) => {
        if (!state.cartItems.find((item:IItem) => item.id === product.id)){
            let copyCartItems =[ ...state.cartItems]
            product.quantity= 1
            copyCartItems.push(product)
            const itemCount = copyCartItems.reduce((total, product) => total + product.quantity, 0);
            const total = copyCartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            localStorage.setItem('cart', JSON.stringify(copyCartItems));
                setState({
                cartItems:copyCartItems,
                itemCount,
                total,
            })
        } 
    }
    const increase = ( product: IProduct ) => {
        const copyCartItems= [...state.cartItems]
        const index = copyCartItems.findIndex((item:IItem) => item.id === product.id)
        copyCartItems[index].quantity = state.cartItems[index].quantity+1
        const itemCount = copyCartItems.reduce((total, product) => total + product.quantity, 0);
        const total = copyCartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        localStorage.setItem('cart', JSON.stringify(copyCartItems));
        setState({
            cartItems:copyCartItems,
            itemCount,
            total,
        })
    }
  
    const removeProduct = (product: IProduct) => {
        const copyCartItems = [...state.cartItems]
        const itemCount = copyCartItems.filter((item:IItem) => item.id !== product.id).reduce((total, product) => total + product.quantity, 0);
        const total = copyCartItems.filter((item:IItem) => item.id !== product.id).reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        localStorage.setItem('cart', JSON.stringify(copyCartItems.filter((item:IItem) => item.id !== product.id)));
        setState({
            cartItems: copyCartItems.filter((item:IItem) => item.id !== product.id),
            itemCount,
            total,
        })
    }

    const decrease = (product: IProduct) => {
        const copyCartItems= [...state.cartItems]
        const index = copyCartItems.findIndex((item:IItem) => item.id === product.id)
        copyCartItems[index].quantity = state.cartItems[index].quantity-1
        const itemCount = copyCartItems.reduce((total, product) => total + product.quantity, 0);
        const total = copyCartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        localStorage.setItem('cart', JSON.stringify(copyCartItems));
        setState({
            cartItems:copyCartItems,
            itemCount,
            total,
        })
    }
    const clearCart = () => {
        localStorage.setItem('cart', JSON.stringify([]));
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
  