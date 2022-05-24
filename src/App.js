import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='general-container'>
        <ItemListContainer greeting='Products'/>
      </div> 
    </div>
  );
}

export default App;
