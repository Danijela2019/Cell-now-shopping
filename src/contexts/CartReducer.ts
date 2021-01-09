import {IItem} from '../types'

export const sumItems = (cartItems :Array<IItem>) => {
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount:itemCount,
            total: total 
    }
}

export const CartReducer = (state:any, action: any) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.cartItems.find((item:IItem) => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } 
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter((item:IItem) => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter((item:IItem) => item.id !== action.payload.id)]
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex((item:IItem) => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex((item:IItem) => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...sumItems([]),
                }
        default:
            return state;

    }
}