/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoedaPage from './Pages/MoedaPage';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/login';

function App() {
  return (
   <BrowserRouter>
   <div>
      <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='moeda/:id' element={<MoedaPage/>}  />
          <Route path='/login' element={<Login/>}/>          
        </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
