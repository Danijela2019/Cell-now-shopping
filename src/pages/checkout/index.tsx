
/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Header,ButtonWrapper,EmptyCart} from './ItemComponents';


import ItemsInCart from './ItemsInCart';
import { CartContext } from '../../contexts/CartContext';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import {CartContextType } from '../../types';

const Checkout = () => {
    const goToCheckout = () => {console.log('show Order Confirmed modal here')}

    let history = useHistory();
    const redirectToPhones= () => {
        history.push('/phones')
    }  

    
    const { total, cartItems, itemCount, clearCart } = useContext(CartContext)  as CartContextType ;

    return ( 
        <div css={{margin:'5rem 1rem',alignContent:'center'}}>
            <React.Fragment>
                {cartItems.length > 0 ?
                    <ItemsInCart/> :
                        <EmptyCart >
                            <h3 css={{margin:'3rem'}}>Your cart is empty</h3>
                            <Icon size='70px' color='#272643'> 
                                <AiOutlineShoppingCart />
                            </Icon>
                            <Button  
                                bg="#2c698d"
                                text="white"
                                width="10rem"
                                height="2rem" 
                                clicked={redirectToPhones}>
                                    Go back to phones
                            </Button>
                        </EmptyCart>
                }
            </React.Fragment>
        
                { cartItems.length > 0 &&
                    <React.Fragment>
                        <div css={{display:'flex', marginTop:'6rem'}}>
                            <Header>Items:{' '}{itemCount}</Header>
                            <Header>Total Price:{' '}{total} SEK</Header>
                        </div>
                        <hr/>
                        <ButtonWrapper>
                            <Button  
                                bg="#2c698d"
                                text="white"
                                width="10rem"
                                height="2rem" 
                                clicked={goToCheckout}>
                                    CHECKOUT
                            </Button>
                            <Button  
                                bg="#2c698d"
                                text="white"
                                width="10rem"
                                height="2rem" 
                                clicked={clearCart}>
                                    CLEAR CART
                            </Button>
                        </ButtonWrapper>
                    </React.Fragment> 
                }
        </div>
    );
}

export default Checkout;