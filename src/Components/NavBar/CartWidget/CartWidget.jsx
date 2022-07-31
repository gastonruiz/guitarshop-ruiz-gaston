import React from "react";
import cart from "../../../Components/carritoCompras.jpg";

const CartWidget = () => {
  return (
    <div>
      <a href="x">
        <img src={cart} alt="cart" width={100} className="rounded-2xl"></img>
      </a>
    </div>
  );
};

export default CartWidget;
