import React from "react";
import ItemCount from "../ItemCount/ItemCount";



const ItemListContainer = (props) => {

  const onAdd = () => {
    alert("Gracias por tu compra");}

  return (
    <>
    <div className="font-bold text-center text-4xl text-white bg-pink-700">
      {" "}
      {props.msg}{" "}
    </div>

    <ItemCount initial={0} stock={8} onAdd={onAdd} />





    </>

  );
};

export default ItemListContainer;
