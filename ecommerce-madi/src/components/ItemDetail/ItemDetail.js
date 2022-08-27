import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"


const ItemDetail =  ({itemProduct}) => {
    const { title, image, price ,stock } = itemProduct 

    const [cantidadSeleccionada , setCandidadSeleccionada] = useState(0)

    return (

        <div className="item-product">
            <img src={`../img/${image} `} class="img-prod" alt="imagen-producto" />
            <p> {title} </p>
            <span>{price}</span>
            <span> Stock {stock} </span>
            
           {cantidadSeleccionada > 0 ? <button> TERMINAR COMPRA </button> : <ItemCount setCantidadSeleccionada={setCandidadSeleccionada}/>}
            
        </div>
    )
}


   

export default ItemDetail

