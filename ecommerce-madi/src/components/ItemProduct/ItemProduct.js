import ItemCount from "../ItemCount/ItemCount"


const ItemProduct = ({data}) => {
    
    const { title, image, price , } = data

    return (

        <div className="item-product">
            <img src={`../img/${image} `} class="img-prod" alt="imagen-producto" />
            <p>{title}</p>
            <span>{price}</span>
            
            <button> Ver detalle </button>
            
            <ItemCount />

        </div>
)

}

export default ItemProduct
