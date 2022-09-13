import { createContext , useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {
    
    const  [ cartProducts, setCartProducts] = useState ([])

    const [ totalProducts, setTotalProducts] = useState (0)

    
    const addProductToCart = (product) => {
        setTotalProducts (totalProducts + 1)
        setCartProducts([...cartProducts, product])

    }

    const clear = () => {
        setCartProducts([])
    }

    const borrar = (param) => {

        var index = cartProducts.indexOf( param );
      
        cartProducts.splice( index, 1 );
        
        setCartProducts(cartProducts)
      
      }
    

    const data = {
        cartProducts,
        setCartProducts,
        clear,
        borrar,
        addProductToCart,
        totalProducts
    }


    return (
        <CartContext.Provider value= {data}>
            {children}
        </CartContext.Provider>
    )
        

    
    
}


export default CartProvider
export { CartContext }