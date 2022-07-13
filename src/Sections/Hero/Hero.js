/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import CardsSlider from '../../Components/CardsSlider'
import CarouselAlta from '../../Components/CarouselAlta'
import './hero.css'


const Hero = () => {
  return (
    <section className='hero' id='hero'>
        <Container className='hero-content'>
            <Row className='align-items-center principal'>
                <Col lg={6}>
                    <div className='hero-text'>
                        <h1><span className='color-1'>Cripto</span><span className='color-2'>Gama</span> sua corretora brasileira de criptomoedas</h1>
                        <p>A primeira corretora totalmente brasileira de criptomoedas,  compre, venda ou negocie suas criptomoedas aqui!</p>
                        <a href="#" target="_blank" className="hero-btn">
                            <span>Começe agora</span>
                        </a>
                    </div>
                </Col>
                <Col lg={6} className='cardslider-hero'>
                    <CardsSlider    />
                </Col>
            </Row>
            <div className='carousel-hero'>
                <CarouselAlta   />
            </div>
        </Container>
    </section>
  )
}

export default Hero