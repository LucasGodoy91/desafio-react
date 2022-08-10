import item from "../../utils/item.mock";
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const[itemProduct, setItemProduct] = useState ({})

    

    
    useEffect (() => {
        const getItemProduct = new Promise (res => {
            setTimeout (() => {
                res (item);
            }, 3000);
        });
        
    getItemProduct.then (res => 
        setItemProduct(res));
    }, [])
    

    
    return (
        <div>
            <h2> PRODUCTOS DESTACADOS </h2>
            
            <div className="container-products">
               
            < ItemDetail itemProduct={itemProduct}/>   
                
            </div>
        </div>
    )
}

export default ItemDetailContainer