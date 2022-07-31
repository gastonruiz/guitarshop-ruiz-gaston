import React from "react";
import logo from "../../imagenes/logoPagina.webp";
import CartWidget from "./CartWidget/CartWidget";

export default function NavBar() {
  const NavBarItems = ["Home", "Categories", "About Us", "Contact Us"];

  return (
    <div className="inline-grid grid-cols-4 bg-black">
      <div>
        <img src={logo} alt="logo" width={250} height={250} />
      </div>
      <div>
        <h1 className="text-white mt-8 pt-14 text-6xl font-bold font-kaushan">
          Guitar Shop
        </h1>
      </div>
      <div>
        <ul className="flex items-stretch font-mono text-xl font-semibold text-[rgb(255,0,255)] flex space-x-12">
          {NavBarItems.map((item) => (
            <a href="x" className="pt-24 pl-3 ml-4">
              {item}
            </a>
          ))}
        </ul>
      </div>
      <div className="pt-16 ml-24 pl-24 ">
        <CartWidget />
      </div>
    </div>
  );
}
