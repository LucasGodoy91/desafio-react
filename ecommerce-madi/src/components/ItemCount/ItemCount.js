import { useState } from "react";


const ItemCount = () => {
    const [ contador, setContador] = useState(1) 
    
    const addNumber = () => {
        setContador (contador + 1)
    }
    
    const subtractNumber = () => {
        setContador (contador - 1)
    }

    return (

        <div className="count">
            <p> {contador} </p> 
            <button onClick={subtractNumber}> - </button>            
            <button onClick={addNumber}> + </button>
        </div>
    )
}

export default ItemCount


