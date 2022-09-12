import { useState , useContext} from "react";
import { CartContext } from "../context/CartContext";


const ItemCount = ({setCantidadSeleccionada, productData}) => {
    const [ contador, setContador] = useState(1) 

    const { addProductToCart} = useContext (CartContext)
    
    const addNumber = () => {
        setContador (contador + 1)
    }
    
    const subtractNumber = () => {
        setContador (contador - 1)

        
    }

   

    const onAdd = () => {
        addProductToCart(productData)
        setCantidadSeleccionada(contador)
    }

    

    return (
        <>
        <div className="count">
             
            <button onClick={subtractNumber}> - </button> <p> {contador} </p>  <button onClick={addNumber}> + </button>          
            
        </div>
        <button onClick={onAdd}> AÑADIR AL CARRITO </button>
        </>
    )
}

export default ItemCount


