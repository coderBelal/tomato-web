import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Cart from "./Page/Cart/Cart";
import PlaceOrder from "./Page/PlaceHolder/PlaceOrder";
import "./App.css";
import Footer from "./Components/Footer";
import LoginPopup from "./Components/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
