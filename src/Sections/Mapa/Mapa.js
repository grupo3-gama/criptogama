import React from 'react'
import {Container} from 'react-bootstrap'
import './mapa.css'



const Map = () => {
    return (
        <section className='map' id='contato'>
            <Container>
                <div className='map-content'>
                    <div className="formulario">
                        <form>
                            <div className="heading">
                                <h1>Entre em contato</h1>
                            </div>
                            <div className="contactseparator"></div>
                            <div className="inputBox2">
                            <input type="text" required/>
                            <span>Nome</span>
                            </div>
                            <div className="inputBox2">
                                <input type="text" required/>
                                <span>Email</span>
                            </div>
                            <div className="inputBox2">
                                <input type="text" required/>
                                <span>Whatsapp</span>
                            </div>
                            <div className="inputBox2">
                                <textarea type="text" required></textarea>
                                <span>Menssagem</span>
                            </div>
                            <button className="botao" type="submit"><span>ENVIAR</span></button>
                        </form>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8639.431446417104!2d14.540181448798096!3d57.22493071153628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4650b4b71e5b1a9d%3A0x3604ff223c5e3b92!2zNTcwIDAxIEh1bmTDpXNlbiwgU3XDqWNpYQ!5e0!3m2!1spt-BR!2sbr!4v1657579033216!5m2!1spt-BR!2sb" 
                    width="600" 
                    height="500" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy"
                    className='mapa-map' 
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>                       
            </Container>
        </section>

        )
    }
    
    export default Map