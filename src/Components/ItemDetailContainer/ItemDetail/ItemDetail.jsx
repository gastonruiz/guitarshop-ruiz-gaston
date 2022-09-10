import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { useState } from "react";



const ItemDetail = ({ Item , stock}) => {
  
  const [add, setAdd] = useState(false);
  const onAdd = (cuenta) => {
    setAdd(!add);
  }; 
  

  return (
    <div>
      <div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {Item.title} - {Item.id}
        </div>

        <div>
          <div>
            <img className="w-full" src={Item.img} alt="The Guitar" />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {Item.title}
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Item.descripcion}
            </p>
            
          </div>
          
        </div>
        
      </div>
      <p className="text-gray-700 text-base">Stock disponible {stock}</p>
      
      <div className="bg-gray-700 rounded">
        <div>Añadido</div>
        
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </div>
      <button>Finalizar compra</button>
    </div>
  );
};

export default ItemDetail;
