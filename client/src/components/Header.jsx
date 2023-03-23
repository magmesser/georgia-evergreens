import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/dev/gelogo.png";
import { BsPersonCircle } from 'react-icons/bs';

function Header() {
    return (

        <header className="">

            <nav className="">
                <ul className="grid grid-cols-8">
                    <li className="m-5"><Link to="/">Home</Link></li>
                    <li className="m-5"><Link to="/products">Products</Link></li>
                    <li className="m-5 col-span-4 "><Link to="/contact">Contact</Link></li>
                    <li className="m-5"><Link to="/profile"><BsPersonCircle /></Link></li>
                    <li className="m-5"><Link to="/cart">🛍️</Link></li>
                    </ul>
            </nav>

            <div className="grid grid-cols-3 max-h-60 place-items-center">
                <div className="col-span-1"></div>
                <img className="col-span-1 max-w-xs" src={logo} alt="logo" />
                <div className="col-span-1"></div>
            </div>
        </header>

    );
}

export default Header;