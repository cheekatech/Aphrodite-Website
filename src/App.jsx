import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Checkout from './components/Checkout.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
import Wishlist from "./components/Wishlist";

import Account from "./pages/Account";
import Profile from "./pages/Profile";


import NewsLetter from './components/NewsLetter.jsx';
import Footer from './components/Footer.jsx';
import { CartProvider } from './components/CartContext.jsx';
import { WishlistProvider } from "./components/WishlistContext.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

function App() {

  return (
    <CartProvider>
      <WishlistProvider>
        <AuthProvider>
          <Router>
          <ScrollToTop />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            
            <Route path="/account" element={<Account />}>
              <Route index element={<Profile />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>

          <NewsLetter />

          <Footer />
        </Router>
        </AuthProvider>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App