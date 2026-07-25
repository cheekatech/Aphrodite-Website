import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import "./LogIn.css";

function LogIn() {
  const { signup, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || location.pathname || "/account";

  const [mode, setMode] = useState("signup");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zip: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      if (!form.email && !form.password) {
        setError("Please enter your email and password.");
        return;
      }
      if (!form.email) {
        setError("Please enter your email.");
        return;
      }
      if (!form.password) {
        setError("Please enter your password.");
        return;
      }

      setError("");
      login(form.email, form.password);
      navigate(redirectTo);
    } else {
      if (
        !form.name ||
        !form.email ||
        !form.password ||
        !form.country ||
        !form.state ||
        !form.city ||
        !form.address ||
        !form.zip
      ) {
        setError("Please fill in all fields.");
        return;
      }

      setError("");
      signup(form);
      navigate(redirectTo);
    }
  };

  return (
    <div className="loginHome">
      <div className="loginBox">
        <h2>{mode === "signup" ? "Sign Up" : "Log In"}</h2>

        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <>
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
                  type="text"
                  name="address"
                  placeholder=" "
                  value={form.address}
                  onChange={handleChange}
                  className="floatingInput"
                />
                <label className="floatingLabel">Address</label>
              </div>

              <div className="row">
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
                      name="state"
                      placeholder=" "
                      value={form.state}
                      onChange={handleChange}
                      className="floatingInput"
                    />
                    <label className="floatingLabel">State</label>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="floatingGroup">
                    <input
                      type="text"
                      name="country"
                      placeholder=" "
                      value={form.country}
                      onChange={handleChange}
                      className="floatingInput"
                    />
                    <label className="floatingLabel">Country</label>
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
            </>
          )}

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
              type="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
              className="floatingInput"
            />
            <label className="floatingLabel">Password</label>
          </div>

          {error && <p className="formError">{error}</p>}

          <button type="submit" className="submitBtn">
            {mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="toggleText">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <span onClick={() => setMode("signup")}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setMode("login")}>Log In</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default LogIn;