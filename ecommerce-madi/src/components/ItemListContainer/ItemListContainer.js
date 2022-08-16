
import products from "../../utils/products.mock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {
    

    const [listProducts, setListProducts] = useState([])
     
    useEffect ( () => {
        const getItemProduct = new Promise (res => {
            setTimeout (() => {
                res (products);
            }, 2000);
        });
        getItemProduct.then (res => setListProducts(res));
    }, [])

    

   
    
    return (
        <div>
            
            
            <div className="container-products">
               
                < ItemList dataProducts={listProducts}/>    
                
            </div>
        </div>
    )
        
    
} 

export default ItemListContainer 