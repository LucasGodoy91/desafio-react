import item from "../../utils/item.mock";
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({section}) => {

    const[itemProduct, setItemProduct] = useState ([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout ( () => {resolve (item)}, 2000)
    })

    
    useEffect (() => {
        getItem
    .then ( (res) => {
        setItemProduct(res)
    })
    .catch ( (error) => {
        console.log ("Fallo")
    })
    .finally ( () => {})
    }, [])

    
    return (
        <div>
            <h2> PRODUCTOS DESTACADOS </h2>
            
            <div className="container-products">
               
            < ItemDetail dataProducts={itemProduct}/>   
                
            </div>
        </div>
    )
}

export default ItemDetailContainer