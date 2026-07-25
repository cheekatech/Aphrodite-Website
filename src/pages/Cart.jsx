import "./Cart.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";
import cart from "../assets/icons/addToCart.png";
import remove from "../assets/icons/remove.png";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Cart() {

  const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);

  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      navigate("/account", { state: { from: "/cart" } });
      return;
    }

    if (!form.name || !form.email || !form.address || !form.city || !form.zip) {
      alert("Please fill in all shipping fields.");
      return;
    }

    console.log("Order placed:", { ...form, items: cartItems, total: grandTotal });

    clearCart();
    navigate("/order-confirmation");
  };

  if (cartItems.length === 0) {
    return <h3 className="noCart">Your cart is empty</h3>;
  }

  return (
    <div className="cartHome">
      <div className="cartList">
        <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price Each</th>
            <th>Quantity</th>
            <th>Price Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        
        {cartItems.map((item) => (
          
        <tbody key={`${item.id}-${item.size}-${item.color}`}>
          <tr>
          
            
            <td>
              <img src={item.image || item.Image[0]} alt={item.name} width="80" />
            </td>

            <td><h6>{item.name}</h6></td>

            <td>
              {item.color && <p>Color: {item.color}</p>}
            </td>

            <td>
              {item.size && <p>Size: {item.size}</p>}
            </td>

            <td>
              <p>${item.price} each</p>
            </td>


            <td className="updateBtn">
              <button
              onClick={() =>
                updateQuantity(item.id, item.size, item.color, item.quantity - 1)
              }
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() =>
                  updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                }
              >
                +
              </button>
            </td>

          <td>
            <p>
            ${(item.price * item.quantity).toFixed(2)}
            </p>
          </td>

          <td>
            <button className="removeBtn"
            onClick={() => removeFromCart(item.id, item.size, item.color)}
            >
              <img src={remove} width={"30"} alt="" />
            </button>
          </td>
            
          </tr>
        </tbody>
      ))}
      
      </table>

      </div>
      <div className="checkoutDetails">
          <div id="shippingInfo" className="checkoutForm">
          <h5>Shipping Details</h5>

         
           <div className="floatingGroup">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              className="floatingInput"
            />
            <label className="floatingLabel">Full Name</label>
          </div>

          <div className="floatingGroup">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              className="floatingInput"
            />
            <label className="floatingLabel">Email</label>
          </div>

          <div className="floatingGroup">
            <input
              type="text"
              name="address"
              placeholder=" "
              value={form.address}
              onChange={handleChange}
              className="floatingInput"
            />
            <label className="floatingLabel">Address</label>
          </div>

          <div>
            <div>
              <div className="floatingGroup">
                <input
                  type="text"
                  name="city"
                  placeholder=" "
                  value={form.city}
                  onChange={handleChange}
                  className="floatingInput"
                />
                <label className="floatingLabel">City</label>
              </div>
            </div>
            <div>
              <div className="floatingGroup">
                <input
                  type="text"
                  name="zip"
                  placeholder=" "
                  value={form.zip}
                  onChange={handleChange}
                  className="floatingInput"
                />
                <label className="floatingLabel">ZIP Code</label>
              </div>
            </div>
          </div>
         </div>
       

        <div className="cartOrders">
          <h5>Order Summary</h5>
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}-${item.color}-summary`}
              className="orders"
            >
              <span>
                {item.name} {item.size && `(${item.size})`} × {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="total">
            <strong>Total: </strong>
            <strong>${grandTotal.toFixed(2)}</strong>
          </div>

          <button onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;