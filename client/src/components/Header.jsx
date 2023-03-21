import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/dev/gelogo.png"

function Header() {
    return (
    
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div>
                <li><Link to="/profile">👤</Link></li>
                <li><Link to="/cart">🛍️</Link></li>
            </div>
        </header>

    );
}

export default Header;