
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from   './pages/Inicio';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import Detalle from './pages/Detalle';
import CartProvider from './components/context/CartContext';



function App() {
  return (  
    //JSX
    <CartProvider>
  < BrowserRouter > 
      <NavBar />
      <Routes>
         <Route path="/" element={<Inicio />}/>
         <Route path= "/contacto" element= {<Contacto />}/>
         <Route path= "/productos" element= {<Productos />}/>
         <Route path= "/productos/:id" element= {<Detalle />}/>
         <Route path= "/productos/:category" element={<Productos />}/>

          

          
      </Routes> 
  </BrowserRouter>
  </CartProvider>  

    
  );
}

export default App;

