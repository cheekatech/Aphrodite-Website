import "./Shop.css";
import Nav from "../components/Nav.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import Footer from "../components/Footer.jsx";
import shopHero from "../assets/pageImages/shopHero.avif";
import men from "../assets/pageImages/Men.jpeg";
import women from "../assets/pageImages/women.jpeg";
import sportWears from "../assets/pageImages/sportWears.webp";
import newArrivals from "../assets/pageImages/newArrivals.avif";
import { TrendingNow, NewArrivals, MenFashion, WomenFashion, SportWears, FlashSales } from "../components/Products.jsx";
import Products from "../components/Products.jsx";
import { useSearchParams } from "react-router-dom";
import { ProductLists } from "../components/Products.jsx";
import cartIcon from "../assets/icons/cart.png";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

function Shop() {

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const displayedProducts = searchTerm
    ? ProductLists.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : ProductLists;

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
    <div className="shop" id="shop">
      <div className="shopHero"style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${shopHero})`}}  ><h1>#StoreAphrodite</h1></div>

      {searchTerm ? (
        <div className="products-container">
          <h2 className="gridTitle">
            {displayedProducts.length > 0
              ? `Search results for "${searchTerm}"`
              : `No products found for "${searchTerm}"`}
          </h2>

          {displayedProducts.length > 0 && (
            <div className="products-grid">
              {displayedProducts.map((product) => (
                <section key={product.id}>
                  <Link style={{ textDecoration: "none", color: "#3f2305" }} to={`/products/${product.id}`}>

                    {product.Image && (
                      <div className="image-wrapper">
                        <img className="products" src={product.Image[0]} alt={product.name} />
                      </div>
                    )}

                    {product.name && <h3>{product.name}</h3>}

                    {product.writeup && <p className="writeup">{product.writeup}</p>}

                    {product.price && (
                      <p className="price">
                        ${product.price}{" "}
                        {product.oldprice && <span><i>${product.oldprice}</i></span>}
                      </p>
                    )}

                    {product.discount && <p className="percent">-{product.discount}%</p>}

                    {product.rating && (
                      <div className="below-container">
                        <div className="rating">
                          <img className="stars" src={product.star} alt="Star" />
                          <span>({product.rating})</span>
                        </div>
                        <button><img src={cartIcon} alt="Add to Cart" /></button>
                      </div>
                    )}

                  </Link>
                </section>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="shopContent">
            <Link to="/shop#newArrivals" style={{ textDecoration: 'none' }}>
              <div style={{backgroundImage: `url(${newArrivals})`}} className="shopContentContainer">
                <h3>New Arrivals</h3>
              </div>
            </Link>

            <Link to="/shop#menFashion" style={{ textDecoration: 'none' }}>
              <div style={{backgroundImage: `url(${men})`}} className="shopContentContainer">
                <h3>Men</h3>
              </div>
            </Link>

            <Link to="/shop#womenFashion" style={{ textDecoration: 'none' }}>
              <div style={{backgroundImage: `url(${women})`}} className="shopContentContainer">
                <h3>Women</h3>
              </div>
            </Link>

            <Link to="/shop#sportWears" style={{ textDecoration: 'none' }}>
              <div style={{backgroundImage: `url(${sportWears})`}} className="shopContentContainer">
                <h3>Sport Wears</h3>
              </div>
            </Link>
          </div>

          <FlashSales />
          <TrendingNow />
          <NewArrivals />
          <MenFashion />
          <WomenFashion />
          <SportWears />
        </>
      )}
    </div>
    </>
  )
}
export default Shop