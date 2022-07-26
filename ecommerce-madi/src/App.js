
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';
import ItemList from './components/ItemListContainer/ItemList';



function App() {
  return <>

    
    <div className="App">
       

         <NavBar />   
    </div>

    <div className='container-products'>
      <ItemContainer />
      
    </div>

    
    </>;
}

export default App;

