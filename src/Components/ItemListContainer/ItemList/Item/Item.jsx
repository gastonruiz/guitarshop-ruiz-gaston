import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";


const Item = ({  title, price, stock, img, }) => {
  const onAdd = () => {
    alert("Gracias por tu compra");
  
  };

  return (
    <div className="inline-grid max-w-sm rounded overflow-hidden m-7 shadow-lg">
  <img className="w-full" src={img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title} <span>$ {price}</span></div>
    <p className="text-gray-700 text-base">
    Stock disponible {stock}
    </p>
    <div className="bg-gray-700 rounded">
        <ItemCount initial={0} stock={stock} onAdd={onAdd} />
      </div>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Guitars</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rockstar</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SixStrings</span>
  </div>
</div>
   /*  {/* <div className="">
      <div className='grid grid-cols-3 text-center'>
        <div className='col-start-2 col-end-3'>
        <div className=' '>
        <p>
            {title} <span>$ {price}</span>
          </p>
          
          <img src={img} alt='la imagen' width={450} />
          
          <p>Stock disponible {stock}</p> 
        </div>
        </div>
      </div>
      <div>
        <ItemCount initial={0} stock={stock} onAdd={onAdd} />
      </div>
    </div> *///} */
  );
};

export default Item;
