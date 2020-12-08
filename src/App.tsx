/** @jsxImportSource @emotion/react */
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ProductsContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import { css } from '@emotion/react'

import NavBar from './components/navigation/NavBar'
import Footer from './components/Footer'
import Routes from './pages';


const App = () => {
  return (
    <ProductsContextProvider>
        <CartContextProvider>
          <div css={PageContainer}>
          <div css={ContentWraper}>
          <Router>
            <NavBar/>
            <Routes/>
           
          </Router>
          </div>
          <Footer />
          </div>
      </CartContextProvider>
      </ProductsContextProvider>
  
  );
}

const PageContainer = css`
display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWraper = css`
flex: 1;
`
export default App;
