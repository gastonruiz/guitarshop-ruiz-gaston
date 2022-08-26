import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";
import { link } from 'react-router-dom'
import Detalle from "../../../../imagenes/btnMoreInfo.jpg"

const Item = ({  title, price, stock, img}) => {
  const onAdd = (cuenta) => {
    
    alert(`Gracias por comprar ${cuenta} articulos`);

    
  
  };


  return (
    <div className="inline-grid max-w-sm rounded overflow-hidden m-7 shadow-lg">
  <img className="w-full" src={img} alt="The Guitar"width={600} height={800}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title} <span>$ {price}</span></div>
    <p className="text-gray-700 text-base">
    
    Stock disponible {stock}
    </p>
    <div className="bg-gray-700 rounded">
        <ItemCount initial={0} stock={stock} onAdd={onAdd} />
        <button className="ml-14" to={`/item/${title, price, stock, img}`}> 
      <img src={Detalle} alt="More Detail" /> </button>
      </div>
     
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Guitars</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rockstar</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SixStrings</span>
  </div>
</div>

  );
};

export default Item;
