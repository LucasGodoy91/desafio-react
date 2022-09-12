import { Link } from "react-router-dom";
import CartWidget from "../NavBar/CartWidget";

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
                     <Link to="/productos/:category">   <a><button> Musculosas </button></a> </Link>
                     <Link to="/productos/:category">   <a><button> Leggins </button></a> </Link>
                     <Link to="/productos/:category">   <a><button> Sudaderas </button></a> </Link>
                     <Link to="/productos/:category">   <a><button> Tops </button></a> </Link>
                    </div> 
                </li> 
                </div></Link> 
             <Link to="/contacto">  <li> <button className="botones"> Contacto </button> </li> </Link>
                  
            </ul>

            < CartWidget />
                 
            
            
        </div>   )
}

export default NavBar;