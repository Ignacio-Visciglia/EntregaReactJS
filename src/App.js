import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/item/:id' element={<Detail/>}/>
          <Route path='/category/:categoryId' element={<ProductListContainer/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
