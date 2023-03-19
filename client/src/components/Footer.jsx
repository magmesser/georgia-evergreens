import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        {/* footer links on page */}
        <div className="footer-links">
          <ul className="permalinks">
            <li className="footer-link-single">
              <Link to="/">
                <h3>HOME</h3>
              </Link>
            </li>
            <li className="footer-link-single">
              <Link to="/products">
                <h3>PRODUCTS</h3>
              </Link>
            </li>
            <li className="footer-link-single">
              <Link to="/contact">
                <h3>CONTACT</h3>
              </Link>
            </li>
            <li className="footer-link-single">
              <Link to="/profile">
                <h3>PROFILE</h3>
              </Link>
            </li>
            <li className="footer-link-single">
              <Link to="/cart">
                <h3>CART</h3>
              </Link>
            </li>
          </ul>
        </div>

        {/* footer socials */}
        <div className="footer__socials">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/georgiaevergreens/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <ImInstagram />
          </a>
        </div>

        {/* footer copyright and credits  */}
        <div className="footer-copyright">
          <small>&copy; 2023 Georgia Evergreens LLC</small>
          <h3>SITE BUILT BY CLEMB</h3>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
