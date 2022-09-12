import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'



const ItemProduct = ({data}) => {
    
    const { title, image, price , id ,} = data

    

    

    return (

        <div className="item-product">
            <img src={`../img/${image} `} class="img-prod" alt="imagen-producto" />
            <p>{title}</p>
            <span> $ {price}</span>
            <ItemCount />
            <Link to={`/productos/${id}`}> 
            <button> VER DETALLE </button>
            </Link>
           

        </div>
)

}

export default ItemProduct
