import "./ProductDetails.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProductLists, WishlistButton } from "../components/Products.jsx";
import Cart from "../assets/icons/addToCart.png"
import { useCart } from "../components/CartContext";
import { useWishlist } from "../components/WishlistContext";

function ProductDetails() {

  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { id } = useParams();
  const product = ProductLists.find((item) => item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [mainImage, setMainImage] = useState(product?.Image?.[0]);

  useEffect(() => {
    setMainImage(product?.Image?.[0]);
    setSelectedSize(null);
    setSelectedColor(null);
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const relatedProducts = ProductLists
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }
    if (!selectedColor) {
      alert("Please select a color/type first.");
      return;
    }
    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      image: mainImage,
    });
  };
  const handleAddToWishlist = () => {
  addToWishlist(product);
  };

  return (
    <main className="productDetails">
      <section className="breadCrumb">
        Home → Shop → {product.category} → {product.name}
      </section>
      

      <section>
        <div className="proDetailsTop">
          <div className="proDetailsImg">
            {product.Image && (
              <div className="mainImage">
                <img src={mainImage} alt="" />
              </div>
            )}
            {product.Image && (
              <div className="thumbnails">
                {product.Image.map((img, index) => (
                  img && (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      onClick={() => setMainImage(img)}
                      className={mainImage === img ? "activeThumb" : ""}
                      style={{ cursor: "pointer" }}
                    />
                  )
                ))}
              </div>
            )}
          </div>
          <div className="proDetailsAside">
            <h2>{product.name}</h2>


              <p>{product.writeup}</p>

              <div className="sizes">
                <h3>Sizes</h3>
                <div className="buttons">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={selectedSize === size ? "sizeBtn active" : "sizeBtn"}
                      style={
                        selectedSize === size
                          ? { backgroundColor: "#3f2305", color: "#fff", borderColor: "#3f2305" }
                          : {}
                      }
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>


              {product.price && (
                <p className="price" style={{fontSize: "1.5rem", color: "green"}}>
                  ${product.price}{" "}
                  {product.oldprice && <span style={{textDecoration: "line-through", color: "gray", fontSize: "1rem"}}><i>${product.oldprice}</i></span>}
                </p>
              )}
              {product.discount && <p className="percent" style={{color: "red"}}>-{product.discount}%</p>}
              
              <p style={{marginTop: "-1.5rem", fontSize: "1rem"}}><img src={product.star} width={80} alt="" /> ({product.rating})</p>

            

            
            <div className="colors">
              <h3>Colors/types</h3>
              <div className="proColors">
                {product.procolors.map((colorName, index) => (
                  product.Image[index] && (
                    <span
                      key={index}
                      onClick={() => {
                        setSelectedColor(colorName);
                        setMainImage(product.Image[index]);
                      }}
                      className={selectedColor === colorName ? "activeColor" : ""}
                      style={{ cursor: "pointer" }}
                    >
                      <img className="color" src={product.Image[index]} alt={colorName} />
                      <p>{colorName}</p>
                    </span>
                  )
                ))}
              </div>

              <div className="addButton">
                <button onClick={handleAddToCart}>Add To Cart</button>
              <button onClick={handleAddToWishlist}>{isInWishlist(product.id) ? "In Wishlist ✓" : "Add To Wishlist"}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="proDetailsEnd">

          <div className="proReviews">
            <h2>Reviews | <img src={product.star} alt="" /> ({product.rating})</h2>
            <hr />
            <div className="proReview">
              <p><img src={product.star} alt="" /></p>
              <p>The product is nice ☺.</p>
              <p><i>21-02-2025 by Miracle</i></p>
            </div>
            <hr />
            <div className="proReview">
              <p><img src={product.star} alt="" /></p>
              <p>I love the product ♥ .</p>
              <p><i>12-09-2025 by Promise</i></p>
            </div>
            <hr />
            <div className="proReview">
              <p><img src={product.star} alt="" /></p>
              <p>This website is the best 👍 .</p>
              <p><i>13-04-2026 by Precious</i></p>
            </div>
          </div>


          <div className="description">
            <h2>Description</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem eaque necessitatibus tempora ut, deleniti quidem maxime. Fuga aspernatur quasi voluptate animi, praesentium soluta quod voluptatem perspiciatis. Nihil, error expedita.</p>
          </div>

       
        </div>
        
       <section>
           <div className="products-container">
             <h2 className="gridTitle">You may also like</h2>
             <div className="relatedGrid">
       
                {relatedProducts.map(product => (
                 <section key={product.id}>
                   <div className="relatedPro">
                     <Link style={{textDecoration: "none", color: "#3f2305"}} to={`/products/${product.id}`}>
                       {product.Image && (
                         <div className="image-wrapper">
                           {product.Image[0] && (
                             <img className="products" src={product.Image[0]} alt={product.name} />
                           )}
                         </div>
                       )}
                     </Link>
                     <WishlistButton product={product} />
                   </div>

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
                       <button onClick={() => addToCart(product)}><img src={Cart} alt="Add to Cart" /></button>
                     </div>
                   )}
       
                 
                 </section>
               ))}
               </div>
       
             </div>
         </section>
      </section>
    </main>
  );
};

export default ProductDetails;