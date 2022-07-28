import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({section}) => {
     const product1 =  {
        title: "Musculosa",
        price: 2980,
        image: 'musculosa.jpeg',
    } 
    
    const product2 = {
        title: "Leggin",
        price: 4980,
        image: 'leggin.jpeg',
    }
    return (
        <div className="container-products">
            <h2> {section} </h2>
            
            <ItemProduct data={product1} />
            <ItemProduct data= {product2} />
            
        </div>
    )
        
    
} 

export default ItemListContainer 