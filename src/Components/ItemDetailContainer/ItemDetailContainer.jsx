import React from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import DetalleProd from "../../productosLista.json"
import { useParams } from "react-router-dom";
import { useEffect } from "react";



const ItemDetailContainer = () => {

const {id} = useParams();
const [Item, setItem] = useState([])

useEffect(()=>{
  const Item = [{ id, title, price, stock, img}]
  
new Promise(()=>{
//Simulamos retraso de red como pasaria con firebase
    setTimeout(()=>{
        resolve(Item.find((element)=> element.id));
    }, 2000)

}).then((data)=>{
//Recibimos la promesa
    setItem(data)
})

},[id])



  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  )
  
}


export default ItemDetailContainer








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
