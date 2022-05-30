import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<Detail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
