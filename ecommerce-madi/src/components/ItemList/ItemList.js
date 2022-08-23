import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({dataProducts}) => {
    return  (
        <>
        {dataProducts.map( (products) =>{
            return (
                <ItemProduct key={products.id} data= {products} />
            )
        })}
        </>
    )
}

export default ItemList