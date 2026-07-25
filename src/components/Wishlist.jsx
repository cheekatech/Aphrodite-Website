import { Link } from "react-router-dom";
import { useWishlist } from "../components/WishlistContext";
import { useCart } from "../components/CartContext";
import "./Wishlist.css"
import remove from "../assets/icons/remove.png";
import cart from "../assets/icons/addToCart.png";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Wishlist() {


  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return <h3 className="noWishlist">Your wishlist is empty</h3>;
  }


  return (
    <div id="wishlist" className="wishlistHome">
      <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Cart</th>
          <th>Remove</th>
        </tr>
      </thead>
      {wishlistItems.map((item) => (
        <tbody
          key={item.id}
        >
          <tr>
            <td>
              <Link to={`/products/${item.id}`}>
              <img src={item.Image[0]} alt={item.name} width="80" />
            </Link>
            </td>


            <td>
              <h6>{item.name}</h6>
            </td>


            <td>
              <p>${item.price}</p>
            </td>


          <td>
            <button
            onClick={() => addToCart({ ...item, quantity: 1 })}
          >
            <img src={cart} width={"30"} alt="" />
          </button>
          </td>


          <td>
            <button
            onClick={() => removeFromWishlist(item.id)}
          >
            <img src={remove} width={"30"} alt="" />
          </button>
          </td>
          </tr>
        </tbody>
      ))}
    </table>
    </div>
  );
}

export default Wishlist;