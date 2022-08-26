import React from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useEffect } from "react";
import axios from "axios";
import datosLista from "../../productosLista.json";

const ItemDetailContainer = (productosLista) => {
  return <>
   <div>ItemDetailContainer</div>
  <ItemDetail/>
 </>

};

export default ItemDetailContainer;

/* const ItemDetailContainer = () => {
  const{id} = useParams()
  cont [item, setItem] = useState({});
  
  

  useEffect( async () => {
    const detalleProd = async () =>{
    try {
      const description = await axios.get(datosLista)
      console.log(descripcion.datosLista)
      console.log(id.datosLista)
    } catch (error) {
      console.log(error)
      
    }
  }
    detalleProd()

    return ()=>
      setDet ([])
  }, [])
  
  return (
    <div>
      { Object.keys(item).length && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer */
