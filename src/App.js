import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import Main from './Pages/Main/main';

function App() {
  return (
    <div className="App">
   
      <Router>
        <Home path="/home" />
        <Main path="/" />
        <SignIn path="/login" />
        <Register path="/register" />
        <ResetPassword path="/reset_password" />
        <ProductDetails path="product-details/:productId" />
        <Cart path="/cart" />
      </Router>
    </div>
  );
}

export default App;
