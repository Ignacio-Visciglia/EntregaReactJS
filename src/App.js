import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Cart from './components/Cart/Cart';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
          <BrowserRouter>
            <NavBar/> 
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/item/:id' element={<Detail/>}/>
              <Route path='/category/:categoryId' element={<ProductListContainer/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/> 
          </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;
