import React from 'react'
import './css/pages.css'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import Sobre from '../Sections/SobreaMoeda/Sobre';

const MoedaPage = () => {

  return (
    <div className='moedapage-content'>
      <Sobre  />
    </div>
  )
}

export default MoedaPage