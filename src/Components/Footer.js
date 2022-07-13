import React from 'react'
import Logo from '../Assets/images/logoname.png'
import Facebook from '../Assets/images/facebook.png'
import Instagram from '../Assets/images/instagram.png'
import Twitter from '../Assets/images/twitter.png'
import { Container, Row, Col } from 'react-bootstrap'
import './css/Footer.css'


const Footer = () => {
  return (
        <footer className='footer' id='links'>
            <div className='footer-upper'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className='footer-widget'>
                                <img className='footer-widget-logo' src={Logo} alt='logo'/>
                                    <a className='footer-email' href="contato@cryptogama.com.br">
                                        contato@cryptogama.com.br
                                    </a>
                                <p className='footer-widget-contato'>
                                    Rua Hundåsen,  Rörvik, Suécia
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className='footer-mid'>
                            <div className='footer-widget'>
                                <h3 className='footer-widget-tit'>Explore</h3>
                                <div className='footer-links'>
                                    <a className='footer-text' href='https://www.gama.academy'>Gama Academy</a>  
                                    <a className='footer-text' href='https://www.coingecko.com'>CoinGecko</a> 
                                </div>
                            </div>
                            <div className='footer-widget'>
                                <h3 className='footer-widget-tit'>Serviços</h3>
                                <div className='footer-links'>
                                    <a className='footer-text' href='https://www.gama.academy'>Gama Academy</a>  
                                    <a className='footer-text' href='https://www.coingecko.com'>CoinGecko</a> 
                                </div>
                            </div>                            
                            <div className='footer-widget'>
                                <h3 className='footer-widget-tit'>Links</h3>
                                <div className='footer-links'>
                                    <a className='footer-text' href='https://www.gama.academy'>Gama Academy</a>  
                                    <a className='footer-text' href='https://www.coingecko.com'>CoinGecko</a> 
                                </div>
                            </div>                           

                        </Col>
                        <Col lg={3}>
                            <div className="footer-widget footer-social">
                                <h3 className='footer-widget-tit '>Redes Sociais</h3>
                                <div className="footer-social">                                    
                                        <a href="https://twitter.com/gamaacademybr">
                                            <img src={Twitter} className='twitter'></img>                                    
                                        </a>                              
                                        <a href="https://www.facebook.com/gamaacademybr">
                                            <img src={Facebook} className='facebook'></img>                                    
                                        </a>                                                                                                
                                        <a href="https://www.instagram.com/gamaacademy/">
                                            <img src={Instagram} className='instagram'></img>                                    
                                        </a>                                            
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-cop'>
                <h1> copyright 2022 por<a href='#'> Grupo3 - GamaAcademy</a></h1>
            </div>
        </footer>
  )
}

export default Footer