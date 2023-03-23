import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/gelogo.png";
import { BsPersonCircle, BsCartFill } from 'react-icons/bs';

function Header() {
    return (

        <header className="">

            <nav className="">
                <ul className="grid grid-cols-8">
                    <li className="m-5"><Link className=" hover:text-gray-800" to="/">Home</Link></li>
                    <li className="m-5"><Link className=" hover:text-gray-800"to="/products">Products</Link></li>
                    <li className="m-5 col-span-4 "><Link className=" hover:text-gray-800" to="/contact">Contact</Link></li>
                    <li className="m-5"><Link className=" hover:text-gray-800" to="/profile"><BsPersonCircle /></Link></li>
                    <li className="m-5"><Link className=" hover:text-gray-800" to="/cart"><BsCartFill/></Link></li>
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