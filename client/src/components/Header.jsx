import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/dev/gelogo.png";
import { BsPersonCircle, BsCartFill } from 'react-icons/bs';

function Header() {
    return (

        <header >

            <nav >
                
                <ul className="flex flex-wrap items-center mt-3  sm:mt-0">
                    <li className="mr-4md:mr-6"><Link className=" hover:text-gray-800" to="/">Home</Link></li>
                    <li><Link className=" hover:text-gray-800" to="/products">Products</Link></li>
                    <li><Link className=" hover:text-gray-800" to="/contact">Contact</Link></li>
                </ul>
                <div>
                    <li><Link className=" hover:text-gray-800" to="/profile"><BsPersonCircle /></Link></li>
                    <li><Link className=" hover:text-gray-800" to="/cart"><BsCartFill/></Link></li>
                </div>
            </nav>

            <div>
                <img src={logo} alt="logo" />
            </div>
        </header>

    );
}

export default Header;