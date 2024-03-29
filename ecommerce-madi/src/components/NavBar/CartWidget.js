import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { cartProducts , clear , totalProducts , borrar} = useContext (CartContext)

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div>
      
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       {cartProducts.lenght !== 0 && <p>{totalProducts}</p>}
       <img src="../img/carrito.png"></img>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }} 
      >
        {cartProducts.map ((product) => {
            return (
              
            <div className='cart-widget' key={product.id}>
              
              <img src={`../img/${product.image}`} alt="" className='img-widget'/>
              <span> $ {product.price} </span>
              <span> {product.stock} </span>
              <button onClick= {() => borrar ()}> BORRAR </button>
                
            </div>

          )
          }
        )}

        <button onClick={() => clear ()}> VACIAR CARRITO </button>
      </Menu>
    </div>
  )}



export default CartWidget
