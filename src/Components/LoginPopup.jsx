import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../assets/assets";

const LoginPopup = () => {
  const [currState, setCurrState] = useState("Log In");
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const validateInput = (requiredField) => {
    if (requiredField === "") {
      alert("Please fill in the " + requiredField + " field.");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currState === "Sign Up") {
      if (
        !validateInput(input) ||
        !validateInput(email) ||
        !validateInput(password)
      ) {
        return;
      }
    } else {
      if (!validateInput(email) || !validateInput(password)) {
        return;
      }
      setLoginSuccess(true);
    }
  };

  return (
    <div className="login-popup">
      {currState !== "Closed" && (
        <form className="login-popup-container" onSubmit={handleSubmit}>
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img
              onClick={() => setCurrState("Closed")}
              src={assets.cross_icon}
              alt="Close"
            />
          </div>
          <div className="login-popup-inputs">
            {currState === "Sign Up" && (
              <input
                type="text"
                placeholder="Your name"
                value={input}
                onChange={handleInputChange}
              />
            )}
            <input
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>
            {currState === "Sign Up" ? "Create Account" : "Log In"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          {currState === "Log In" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Log In")}>Log in here</span>
            </p>
          )}
          {loginSuccess && <p className="login-success">Login Successful!</p>}
        </form>
      )}
    </div>
  );
};

export default LoginPopup;
