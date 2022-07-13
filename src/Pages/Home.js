/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Sections/Hero/Hero'
import ListaCryptos from '../Sections/Lista/ListaCryptos'
import Mapa from '../Sections/Mapa/Mapa'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
       <Navbar />
        <Hero   />
        <ListaCryptos  />
        <Mapa />
        <Footer />
    </div>
  )
}

export default Home