import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item/Item";
import carga from "../../../imagenes/rockout-guitar.gif"

const ItemList = (props) => {
  const { productosLista } = props;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const prom = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosLista);
        console.log(productosLista);
      }, 2000);
    });
    prom
      .then((resultado) => setProductos(resultado))
      .catch((err) => console.log(err))
      .finally(() => console.log("promesa realizada"));

    return () => {};
  }, );

  return (
    <>
      {productos.length < 1 ? (
        <div>
         
  <img className="" src={carga} alt='loading'
  >
  </img>
  Processing...

        </div>
      ) : (
        productos.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            price={item.price}
            stock={item.stock}
            img={item.img}
          />
        ))
      )}
    </>
  );
};

export default ItemList;
