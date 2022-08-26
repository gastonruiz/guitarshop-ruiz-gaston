import React from 'react'
import detalleList from '../../../productosLista.json'

const ItemDetail = ({  title, price, stock, img,id, descripcion, categoria}) => {
const {productosLista} =  detalleList (props);
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
    <div>ItemDetail</div>
  )
}

export default ItemDetail



