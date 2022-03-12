import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import About from './pages/About';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar';

function App() {
  const [menuElement, setMenuElement] = useState() 
  console.log(window.location.pathname); 
  return (
    <BrowserRouter>
      <Navbar onChange={setMenuElement} ></Navbar>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Pricing' element={ <Pricing /> } />
        <Route path='About' element={ <About /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
