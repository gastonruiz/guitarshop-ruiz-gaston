import React from "react";
import ItemList from "./ItemList/ItemList";
import dataLista from '../../productosLista.json'
const ItemListContainer = (props) => {

const {productosLista} = dataLista

  return (
    <>
      <div className="font-bold text-center text-4xl text-white bg-pink-700">
        {" "}
        {props.msg}{" "}
      </div>

      <div>
        <ItemList productosLista={productosLista}  />
      </div>
    </>
  );
};

export default ItemListContainer;
