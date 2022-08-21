import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Item = ({  title, price, stock, img, }) => {
  const onAdd = (cuenta) => {
    
    alert(`Gracias por comprar ${cuenta} articulos`);

    
  
  };

/*   const MySwal = withReactContent(Swal)

   
MySwal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500

})
 */
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

  );
};

export default Item;
