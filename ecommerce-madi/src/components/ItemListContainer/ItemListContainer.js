
import products from "../../utils/products.mock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({section}) => {
    

    const [listProducts, setListProducts] = useState([])
     
    const getProducts = new Promise ( ( resolve, reject) => {
        setTimeout ( () => {resolve (products)}, 2000)
        
    } )

    useEffect (() => {
        getProducts
    .then ( (res) => {
        setListProducts(res)
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
               
            < ItemList dataProducts={listProducts}/>    
                
            </div>
        </div>
    )
        
    
} 

export default ItemListContainer 