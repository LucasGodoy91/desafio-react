
import './App.css';
import NavBar from './components/NavBar/NavBar';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return <>

    
    <div className="App">
       

         <NavBar />   
    </div>

    <div className='container-products'>
       {/* <ItemListContainer  /> */}

       <ItemDetailContainer />
      
    </div>

    

    
    </>;
}

export default App;

