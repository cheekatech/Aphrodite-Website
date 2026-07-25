import "./Account.css";
import { NavLink } from "react-router-dom";
import { useWishlist } from "../components/WishlistContext";
import { useAuth } from "../components/AuthContext";
import { Outlet } from "react-router-dom";
import LogIn from "../components/LogIn";
import logOut from "../assets/icons/logOut.png";

function Account() {


  
  const { wishlistCount } = useWishlist();
  const { isLoggedIn, user, logout } = useAuth();

  const navClass = ({ isActive }) => (isActive ? "active" : "");

  if (!isLoggedIn) {
    return <LogIn />;
  }

  return (
    <>
      <div className="account">
        <aside className="accountBar">
          <p className="welcomeText">Hello, {user.name}</p>

          <NavLink to="/account" end className={navClass}>
            Profile
          </NavLink>

          <NavLink to="/account/checkout" className={navClass}>
            Checkout
          </NavLink>

          <NavLink to="/account/wishlist" className={navClass}>
            Wishlist
            {wishlistCount >= 0 && <span className="wishlistCount">{wishlistCount}</span>}
          </NavLink>

          <div className="logOut">
            <button onClick={logout}>
              <img src={logOut} width={15} alt="" /> LogOut
            </button>
          </div>
        </aside>


        <main className="accountLayout">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Account;