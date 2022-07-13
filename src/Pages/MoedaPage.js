/* eslint-disable no-unused-vars */
import React from 'react'
import './css/pages.css'
import Sobre from '../Sections/SobreaMoeda/Sobre';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const MoedaPage = () => {

  return (
    <>
    <Navbar/>
    <div className='moedapage-content'>
        <Sobre  />
    </div>
    <Footer/>
    </>
  )
}

export default MoedaPage