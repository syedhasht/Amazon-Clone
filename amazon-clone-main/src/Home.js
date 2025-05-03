import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg"
        />
        <div className="home_row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71T+fnYlyDL._AC_UY327_QL65_.jpg"
          />
          {/* product */}
        </div>
        <div className="home_row">
          <Product
            title="
Fitbit Inspire 3 Health &-Fitness-Tracker with Stress Management"
            price={198.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61-PhP53C2L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            title="Amazon Echo Studio | Our best-sounding smart speaker ever "
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61iV9mLfj3L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            title="
Roll over image to zoom in
Apple iPad Pro 11-Inch (M4)"
            price={609.85}
            rating={5}
            image="https://m.media-amazon.com/images/I/61RM8ymp-oL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved
LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71qx2uvvb3L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
