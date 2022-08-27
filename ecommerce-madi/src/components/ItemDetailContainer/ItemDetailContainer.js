import item from "../../utils/item.mock";
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../utils/products.mock";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const[itemProduct, setItemProduct] = useState ({})

    

    const {category} = useParams()
    
    const {id} = useParams()

    const filterCategory = products.filter ((products) => products.category === category);

     
    const itemProducts = () => new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (category) {
                resolve (filterCategory);
            } else {
                resolve (products)
            }
        } ,2000 );
    });
    

    useEffect (() => {
        filterById()
    }, [])

    const filterById = () => {
        products.some((product) => {
            if(product.id == id) {
                setItemProduct(product)
            }
        })
    }

    
    
    useEffect (() => {
        const getItemProduct = new Promise (res => {
            setTimeout (() => {
                res (item);
            }, 2000);
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