import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Switch, Router, Link } from 'react-router-dom'


const ItemDetail =  ({itemProduct}) => {
    const { title, image, price ,stock } = itemProduct 

    const [cantidadSeleccionada , setCandidadSeleccionada] = useState(0)

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true)
    }

    return (

        <div className="item-product">
            <img src={`../img/${image} `} class="img-prod" alt="imagen-producto" />
            <p> {title} </p>
            <span> $ {price}</span>
            <span> Stock {stock} </span>
            
           {cantidadSeleccionada > 0 ? <button onClick={handleButtonClick}> TERMINAR COMPRA </button> : <ItemCount setCantidadSeleccionada={setCandidadSeleccionada} productData={itemProduct} />}
            
        </div>
    )
}


   

export default ItemDetail

