/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { css } from '@emotion/react';
import ProductsContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';

import NavBar from './components/navigation/NavBar';
import Footer from './components/Footer';
import Routes from './pages';

const PageContainer = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWraper = css`
  flex: 1;
`;

const App = (): React.ReactElement => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <main css={PageContainer}>
          <div css={ContentWraper}>
            <Router>
              <NavBar />
              <Routes />
            </Router>
          </div>
          <Footer />
        </main>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
