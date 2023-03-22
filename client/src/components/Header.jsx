import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/dev/gelogo.png";
import { BsPersonCircle } from 'react-icons/bs';

function Header() {
    return (

        <header>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div>
                    <li><Link to="/profile"><BsPersonCircle /></Link></li>
                    <li><Link to="/cart">🛍️</Link></li>
                </div>
            </nav>

            <div>
                <img src={logo} alt="logo" />
            </div>
        </header>

    );
}

export default Header;