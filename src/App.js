import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Moeda from './Pages/Moeda';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
   <BrowserRouter>
   <div>
    <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='moeda/:id' element={<Moeda/>}  />
        </Routes>
    <Footer />
   </div>
   </BrowserRouter>
  );
}

export default App;
