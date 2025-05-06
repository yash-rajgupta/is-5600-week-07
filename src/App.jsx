// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import Cart from './components/Cart';
import { CartProvider } from './state/CartProvider'; // make sure this is the right path
import Orders from './components/Orders'; // ✅ ADD THIS LINE

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/product/:id" element={<SingleView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} /> {/* ✅ ADD THIS LINE */}
        </Routes>
        
      </CartProvider>
    </div>
  );
}

export default App;
