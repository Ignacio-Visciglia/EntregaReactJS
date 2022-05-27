import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='general-container'>
        <ItemListContainer greeting='Droid 9 South America E commerce'/>
        <ItemDetailContainer/>
      </div> 
    </div>
  );
}

export default App;
