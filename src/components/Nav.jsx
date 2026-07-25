import React from "react";
import { useState } from "react";
import { ProductLists } from "./Products.jsx";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import './Nav.css'
import logo from '../assets/icons/logo.png'
import search from '../assets/icons/search.png'
import cart from '../assets/icons/cart.png'
import { useCart } from "../components/CartContext";

import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/instagram.png"
import whatsApp from "../assets/icons/whatsapp.png"
import linkedIn from "../assets/icons/linkedin.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredResults =
    searchTerm.trim() === ""
      ? []
      : ProductLists.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 6);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  const handleResultClick = () => {
    setSearchTerm("");
  };

  const closeMenu = () => setIsMenuOpen(false);

  const location = useLocation();
  const isShopActive = location.pathname.startsWith("/shop") || location.pathname.startsWith("/products");
  const isAccountActive = location.pathname.startsWith("/account") || location.pathname.startsWith("/wishlist");
  const { cartCount } = useCart();

  return (
    <>
    <div className="nav">

      <Link to="/"><img src={logo} alt="AphroditeLogo" className="logo" width="120" height="35" /></Link>

      <div className="navBar">

        <form onSubmit={handleSubmit} className="searchBar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleChange}
            className="searchInput"
          />
          <button type="submit"><img src={search} width="20" /></button>

          {filteredResults.length > 0 && (
            <div className="searchDropdown">
              {filteredResults.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="searchResultItem"
                  onClick={handleResultClick}
                >
                  <img src={product.Image[0]} alt={product.name} width="40" />
                  <span>{product.name}</span>
                </Link>
              ))}
            </div>
          )}
        </form>

        <div
          id="hamburger"
          className={isMenuOpen ? "active" : ""}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="sideBar" className={isMenuOpen ? "active" : ""}>

          <NavLink id="homeNav" to="/shop" className={() => (isShopActive ? "active" : "")} onClick={closeMenu}>Shop</NavLink>
          <NavLink id="aboutNav" to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink id="servicesNav" to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink id="portfolioNav" to="/account" className={() => (isAccountActive ? "active" : "")} onClick={closeMenu}>Account</NavLink>

          <div className="sideBar-footer">.</div>

          <div>
            <h1 className="socials">Socials</h1>
            <div className="social-icons">
              <a href="#" className="social-icon" target="_blank"><img src={facebook} alt="facebook" /></a>
              <a href="#" className="social-icon" target="_blank"><img src={instagram} alt="instagram" /></a>
              <a href="#" className="social-icon" target="_blank"><img src={whatsApp} alt="whatsapp" /></a>
              <a href="#" className="social-icon" target="_blank"><img src={linkedIn} alt="linkedin" /></a>
            </div>
          </div>

        </div>

        <div className="navMenu">
          <div><NavLink to="/shop" className={() => (isShopActive ? "active" : "")}>Shop</NavLink></div>
          <div><NavLink to="/about">About</NavLink></div>
          <div><NavLink to="/contact">Contact</NavLink></div>
          <div><NavLink to="/account" className={() => (isAccountActive ? "active" : "")}>Account</NavLink></div>
          <div></div>
        </div>

        <div className="cart">
          <button>
            <NavLink to="/cart">
              <img src={cart} width="24" />
              {cartCount >= 0 && (
                <span className="cartCount">{cartCount}</span>
              )}
            </NavLink>
          </button>
        </div>

      </div>

    </div>
    </>
  )
}


export default Nav