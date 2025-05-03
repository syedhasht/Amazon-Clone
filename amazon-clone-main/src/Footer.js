import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
           
            <div className="footer-content">
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Get to Know Us</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/press">Press Releases</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Make Money with Us</h4>
                        <Link to="/sell">Sell on Amazon</Link>
                        <Link to="/affiliate">Become an Affiliate</Link>
                        <Link to="/advertise">Advertise Your Products</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Amazon Payment Products</h4>
                        <Link to="/credit">Amazon Credit Card</Link>
                        <Link to="/shop">Shop with Points</Link>
                        <Link to="/currency">Currency Converter</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Let Us Help You</h4>
                        <Link to="/account">Your Account</Link>
                        <Link to="/orders">Your Orders</Link>
                        <Link to="/help">Help</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">
                    <img
                        src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
                        alt="Amazon Logo"
                        width="100"
                        height="30"
                    />
                </div>
                <div className="footer-bottom-links">
                    <Link to="/terms">Terms of Use</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/cookies">Cookies Notice</Link>
                    <Link to="/ads">Interest-Based Ads</Link>
                </div>
            </div>
        </footer>
    );
}
