import { useState } from "react";


const ItemCount = ({setCantidadSeleccionada}) => {
    const [ contador, setContador] = useState(1) 
    
    const addNumber = () => {
        setContador (contador + 1)
    }
    
    const subtractNumber = () => {
        setContador (contador - 1)

        
    }

   

    const onAdd = () => {
        setCantidadSeleccionada(contador)
    }

    return (
        <>
        <div className="count">
             
            <button onClick={subtractNumber}> - </button> <p> {contador} </p>  <button onClick={addNumber}> + </button>          
            
        </div>
        <button onClick={onAdd}> COMPRAR </button>
        </>
    )
}

export default ItemCount


