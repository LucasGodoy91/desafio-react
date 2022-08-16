import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <div className="navbar">

        <Link to="/"> <img src="./img/logoMadidos.png" className="logo" alt="logo madi" /> </Link>
            <h1> Bievenido a Madi Deportivo </h1> 
            <ul>
             <Link to="/"> <li> <button className="botones"> Inicio </button> </li> </Link>
             <Link to="/productos">
                 <div className="dropdown-content">
                 <li> <button className="botones"> Productos </button> 
                    <div className="dropdown">
                        <a><button> Musculosas </button></a>
                        <a><button> Leggins </button></a>
                        <a><button> Sudaderas </button></a>
                        <a><button> Tops </button></a>
                    </div> 
                </li> 
                </div></Link> 
             <Link to="/contacto">  <li> <button className="botones"> Contacto </button> </li> </Link>
                  
            </ul>

            
               <button> <img src="./img/carrito.png"/> </button>  
            
            
        </div>   )
}

export default NavBar;