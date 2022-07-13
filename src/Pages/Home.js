import React from 'react'
import Hero from '../Sections/Hero/Hero'
import ListaCryptos from '../Sections/Lista/ListaCryptos'
import Mapa from '../Sections/Mapa/Mapa'

const Home = () => {
  return (
    <div>
        <Hero   />
        <ListaCryptos  />
        <Mapa />
    </div>
  )
}

export default Home