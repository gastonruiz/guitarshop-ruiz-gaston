import React from "react";
import logo from "../../imagenes/logoPagina.webp";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


export default function NavBar() {
  const NavBarItems = ["Home", "Category", "About Us", "Contact Us"];

  return (
    <div className="inline-grid grid-cols-4 bg-black m-0">
      <div>
        <Link to={'/'}>
        <img src={logo} alt="logo" width={250} height={250} />
        </Link>
      </div>
      <div>
        <h1 className="text-white mt-8 pt-14 text-6xl font-bold font-kaushan">
          Guitar Shop
        </h1>
      </div>
      <div>
      <ul className="flex items-stretch font-mono text-xl font-semibold text-[rgb(255,0,255)] flex space-x-12">
            <Link to={'/'}>
                <span className="pt-24 pl-3 ml-4">
                    Home
                </span>
            </Link>
            <Link to={'/categoryid'}>
                <span className="pt-24 pl-3 ml-4">
                    Category
                </span>
            </Link>
            <Link to="/">
                <span className="pt-24 pl-3 ml-4">
                    About Us
                </span>
            </Link>
            <Link to="/">
                <span className="pt-24 pl-3 ml-4">
                    Contact Us
                </span>
            </Link>

        </ul>
      </div>
      <div className="pt-16 ml-24 pl-24 ">
        <CartWidget />
      </div>
    </div>
  );
}
