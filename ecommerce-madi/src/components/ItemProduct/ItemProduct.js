import ItemCount from "../ItemCount/ItemCount"

const ItemProduct = ({data}) => {

    const { title, image, price} = data

    return (

        <div className="item-product">
            <img src={`./public/img/${image} `} alt="imagen-producto" />
            <p>{title}</p>
            <span>{price}</span>
            <button> Comprar </button>
            <ItemCount />
        </div>


    )

}

export default ItemProduct
