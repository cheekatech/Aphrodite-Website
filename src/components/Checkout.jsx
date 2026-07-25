import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useCart();
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

    if (!form.name || !form.email || !form.address || !form.city || !form.zip) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Order placed:", { ...form, items: cartItems, total: grandTotal });

    clearCart();
    navigate("/order-confirmation");
  };

  if (cartItems.length === 0) {
    return <h3 className="noWishlist">Your cart is empty</h3>;
  }

  return (
    <div className="checkoutHome">
      <h3>Checkout</h3>
      <div className="checkoutBody">


        <div className="ordersContainer">
          <h5>Order Summary</h5>
          {cartItems.map((item) => (
            <ul
              key={`${item.id}-${item.size}`}
              className="orders"
            >
              <span>
                {item.name} {item.size && `(${item.size})`} × {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </ul>
          ))}
          <div className="total">
            <strong>Total: </strong>
            <strong>${grandTotal.toFixed(2)}</strong>
          </div>

          <button onClick={handlePlaceOrder} className="orderBtn">
            Place Order
          </button>
        </div>



        <div className="formContainer">
        <h5>Shipping Details</h5>
        <div className="formInfo">
          <div className="form">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange} placeholder="Write your full name here..."
          />
        </div>
        <div className="form">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange} placeholder="Write your email..."
          />
        </div>
        <div className="form">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange} placeholder="Address..."
          />
        </div>
        <div className="formFlex">
          <div>
            <label>City</label>
            <br />
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange} placeholder="City..."
            />
          </div>
          <div>
            <label>ZIP Code</label>
            <br />
            <input
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleChange} placeholder="Zip code..."
            />
          </div>
        </div>
        </div>

        
      </div>
      </div>
    </div>
  );
}

export default Checkout;