import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Cart from './components/Cart/Cart';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import ThemeProvider from './context/ThemeContext';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <NavBar/> 
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/item/:id' element={<Detail/>}/>
              <Route path='/category/:categoryId' element={<ProductListContainer/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
