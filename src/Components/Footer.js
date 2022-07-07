import React from 'react'
import Logo from '../Assets/images/logoname.png'
import { Container, Row, Col } from 'react-bootstrap'
import './css/Footer.css'


const Footer = () => {
  return (
        <footer className='footer'>
            <div className='footer-upper'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className='footer-widget'>
                                <img className='footer-widget-logo' src={Logo} alt='logo'/>
                                <p className='footer-widget-contato'>
                                    <a href="tel:999999999">(55) 9999 9999</a>    
                                </p>
                                <p className='footer-widget-contato'>
                                    <a href="contato@cryptogama.com.br">
                                        contato@cryptogama.com.br
                                    </a>
                                </p>
                                <p className='footer-widget-contato'>
                                    Rua alberto silva, 1265 <br /> Natal, RN
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} className='footer-mid'>
                            <div className='footer-widget'>
                                <h3 className='footer-widget-tit'>Explore</h3>
                                <ul className='footer-widget-links'>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-widget'>
                                <h3 className='footer-widget-tit'>Serviços</h3>
                                <ul className='footer-widget-links'>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-widget'>
                                <h3 className='footer-widget-tit'>Links</h3>
                                <ul className='footer-widget-links'>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='footer-widget'>
                                <div className='footer-social'>
                                    <a>
                                        <i>Redes sociais</i>
                                    </a>
                                    <a>
                                        <i>Redes sociais</i>
                                    </a>
                                    <a>
                                        <i>Redes sociais</i>
                                    </a>
                                    <a
                                    href="#none"
                                    aria-label="social icon"
                                    aria-hidden="true"
                                >
                                    <i className="fa fa-instagram"></i>
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