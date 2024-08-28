import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`background-image ${showProductList ? "fade-out" : ""}`}>
        <div className="mt-5 container text-white">
          <div className="p-2 row border rounded-2 bg-black bg-opacity-50">
            <div className="col-lg mb-2">
              <h1>Welcome To Paradise Nursery</h1>
              <p>Where Green Meets Serenity</p>
              <button className="btn btn-success btn-lg" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>

            <div className="col-lg-8 mt-2">
              <AboutUs />
            </div>
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
