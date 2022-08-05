


const NavBar = () => {
    return(
        <div className="navbar">

            <img src="./img/logoMadidos.png" class="logo" alt="logo madi" />
            <h1> Bievenido a Madi Deportivo </h1> 
            <ul>
                <li> <button class="botones"> Inicio </button> </li>
                <li> <button class="botones"> Productos </button>  </li>
                <li> <button class="botones"> Ubicacion  </button> </li>
                  
            </ul>

            
               <button> <img src="./img/carrito.png" class="carrito" /> </button>  
            
            
        </div>   )
}

export default NavBar;