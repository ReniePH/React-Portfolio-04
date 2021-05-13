import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
//** */
ReactDOM.render(
  <Auth0Provider
  domain = {process.env.REACT_APP_AUTH_DOMAIN}
  clientId = {process.env.REACT_APP_CLIENT_ID}
    //domain='dev-i80tint0.us.auth0.com'
    // clientId='ayuZHoiU4pCfqUdadRZ4c0EivCsA3QOA'
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
