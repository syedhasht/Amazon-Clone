import React from "react";
import "./header.css";
import { useStateValue } from "./Stateprovider";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="Logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header_search">
        <input className="HeaderInput" type="text" />
        <div className="header_searchIcon">
          <SearchIcon />
        </div>
      </div>

      <div className="header_nav">
        <Link to="/SignIn" style={{ textDecoration: 'none' }}>
          <div className="header_options">
            <span className="headerOptionLineOne">Hello Guest</span>
            <span className="headerOptionLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header_options">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& Orders</span>
        </div>

        <div className="header_options">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>

        <Link to="/Checkout" style={{ textDecoration: 'none' }}>
          <div className="header_ShopingBasket">
            <ShoppingBasketIcon />
            <span className="headerOptionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
