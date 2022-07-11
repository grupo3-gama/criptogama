import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoedaPage from './Pages/MoedaPage';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CoinSummary from './Pages/CoinSummary';
import { WatchListProvider } from './context/watchlist';


function App() {
  return (
    <WatchListProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='moeda/:id' element={<MoedaPage />} />
          </Routes>
          <CoinSummary/>
          <Footer />
        </div>
      </BrowserRouter>
    </WatchListProvider>
  );
}

export default App;
