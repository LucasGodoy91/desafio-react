
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from   './pages/Inicio';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';




function App() {
  return (  
    //JSX
  < BrowserRouter > 
      <NavBar />
      <Routes>
         <Route path="/" element={<Inicio />}/>
         <Route path= "/contacto" element= {<Contacto />}/>
         <Route path= "/productos" element= {<Productos />}/>

          

          
      </Routes> 
  </BrowserRouter>
    

    
  );
}

export default App;

