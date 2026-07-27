import logo from '../assets/icons/logo.png'
import search from '../assets/icons/search.png'
import "./Footer.css"
import applePay from "../assets/icons/apple-pay.png"
import googlePay from "../assets/icons/google-pay.png"
import paypal from "../assets/icons/paypal.png"
import visa from "../assets/icons/visa.png"
import mastercard from "../assets/icons/mastercard.png"
import appStore from "../assets/icons/apple-store.jpg"
import googlePlay from "../assets/icons/google-play.jpg"
import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/instagram.png"
import whatsApp from "../assets/icons/whatsapp.png"
import linkedIn from "../assets/icons/linkedin.png";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProductLists } from "./Products.jsx";




function Footer () {

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
  
  const location = useLocation();
  return (
    <>

    <footer>
    <div class="footerHeader">
      <Link to="/">
      <img src={logo} width={300} alt="Company text" />
      </Link>



      <form onSubmit={handleSubmit} className="searchBar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleChange}
            className="searchInput"
          />
          <button type="submit"><img src={search} /></button>

          {filteredResults.length > 0 && (
            <div className="searchDropdown">
              {filteredResults.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="searchResultItem"
                  onClick={handleResultClick}
                >
                  <img src={product.Image[0]} alt={product.name} />
                  <span>{product.name}</span>
                </Link>
              ))}
            </div>
          )}
        </form>
    </div>
    <div class="footer-body">
      <div>
        <h3>Company Info:</h3>
        <p><Link to="/about#historyAphrodite">History of Aphrodite</Link></p>
        <p><Link to="/about#aboutAphrodite">About Aphrodite</Link></p>
        <p><Link to="#">Privacy Policy</Link></p>
        <p><Link to="#">Terms of Service</Link></p>
      </div>

      <div>
        <h3>Account:</h3>
        <p><Link to="/account#profile">Profile</Link></p>
        
        <p><Link to="/account/wishlist">Wishlist</Link></p>
        <p><Link to="/account/checkout">Checkout</Link></p>
        <p><Link to="/cart#shippingInfo">Shipping Information</Link></p>
        
      </div>
      <div>
        <h3>Contact:</h3>
        <p><Link to="/contact">Contact us</Link></p>
        <p><Link to="/contact#contactInfo">Report any Suspicious Activity</Link></p>
        <p><Link to="/contact#support">Customer Support</Link></p>
      </div>

      <div>
        <h5>Download the Aphrodite app on:</h5>
        <a href="https://play.google.com/store/apps/details?id=com.aphrodite.app" target="_blank" rel="noopener noreferrer">
          <img src={googlePlay} alt="Google Play" />
        </a>
        <a href="https://apps.apple.com/us/app/aphrodite/id1234567890" target="_blank" rel="noopener noreferrer">
          <img src={appStore} alt="App Store" />
        </a>
      </div>
    </div>

    <div class="footer-sub-body">
      <div>
        <h3>Pay with:</h3>
        <section>
          <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
            <img src={visa} alt="Visa" />
          </a>
          <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
            <img src={mastercard} alt="Mastercard" />
          </a>
          <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
            <img src={paypal} alt="PayPal" />
          </a>
          <a href="https://www.google.com/pay" target="_blank" rel="noopener noreferrer">
            <img src={googlePay} alt="Google Pay" />
          </a>
          <a href="https://www.apple.com/apple-pay" target="_blank" rel="noopener noreferrer">
            <img src={applePay} alt="Apple Pay" />
          </a>
        </section>
      </div>

      <div>
        <h3>Contact us on our social media handles:</h3>
        <section>
          <a href="https://www.facebook.com/aphrodite" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img src={whatsApp} alt="Whatsapp" />
          </a>
          <a href="https://www.instagram.com/aphrodite" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/aphrodite" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="linkedin" />
          </a>
        </section>
      </div>
    </div>

    <div class="footer-line"></div>
    <div class="footer-end">
      <p>&copy; 2026 Aphrodite. All rights reserved.</p>
      <p>Established in 2026.</p>
      <p>Designed by <a href="#">cheekatech.</a></p>
    </div>
  </footer>

    </>
  )
}
export default Footer