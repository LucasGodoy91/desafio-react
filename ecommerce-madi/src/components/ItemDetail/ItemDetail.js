import ItemCount from "../ItemCount/ItemCount"


const ItemDetail =  ({data}) => {
    const { title, image, price ,stock } = data

    return (

        <div className="item-product">
            <img src={`../img/${image} `} class="img-prod" alt="imagen-producto" />
            <p> {title} </p>
            <span>{price}</span>
            <span> Stock {stock} </span>
            <button> Comprar </button>
            <ItemCount />
        </div>
    )
}


   

export default ItemDetail

