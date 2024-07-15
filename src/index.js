import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//product provider
import ProductProvider from './contexts/ProductContext';
//sidebar provider
import SidebarProvider from './contexts/SidebarContext';
//cart provider
import CartProvider from './contexts/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-kbvmu7q6xpu1tf64.us.auth0.com"
    clientId="UnLYMdpe3ZehzDWogkE8AKDnsZ4DBgAH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
  </Auth0Provider>
);
