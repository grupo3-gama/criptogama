import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ethe from '../Assets/images/ethereum.png';
import styled from 'styled-components';
import Slider1 from '../Assets/images/slider-1.png';
import Slider2 from '../Assets/images/slider-2.png';
import Slider3 from '../Assets/images/slider-3.png';
import './css/components.css';

const ItemSlider = styled.div`
padding: 20px 0;
.slider-item{
    padding-bottom: 20px;
}

.slider-card{
    position: relative;
    width: 370px;
    height: 530px;
    border:none;
    box-shadow:0 0 3px rgba(60,72,88,.15);
    background-color: #283039;
    padding:20px;
    border-radius:15px;
    border:1px solid rgba(107,110,111,.2);
    transition:all .4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slider-card img{
    height: 360px;
    width: 360px;
    transform:scale(1.2);
}

.card-body{
    padding:20px;
    margin-top: -10px;
    margin-left: -10px;
}

.card-body p{
    color:rgba(107,110,111,.6);
    font-weight:600;
}

.card-body h5{
    color: white;
    font-weight:600;
}

.card-bottom{
    position: relative;
    top: -10px;
}

.card-button{
    position:absolute;
    top:-55px;
    right: -21px;
}

.card-button button{
    border: none;
    margin-left: 0;
    background: var(--primary);
    color: white;
    width: 110px;
    height: 45px;
    font-size: 12px;
    text-align: center;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
}

.icon-item img{
    width: 50px;
    height: 50px;
}

.card-icons{
    position: relative;
    display: flex;
    margin-bottom: 20px;
}

.card-img{
    margin-bottom: -20px;
}
`

const CardsSlider = () => {
    return (
        <Carousel className="carousel-content">
          <Carousel.Item>
          <ItemSlider>
                <div className='slider-item'>
                    <div className='slider-card'>
                        <img className='card-img' src={Slider1} alt='Compra de Criptomoedas' />
                        <div className='card-body'>   
                            <p>Recursos da CriptoGama</p>
                            <h5>Compra de Criptomoedas</h5>
                        </div>
                        <div className='card-bottom'>
                            <div className='card-icons'>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                            </div>
                            <div className='card-button'>
                                <button>CRIPTOGAMA</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ItemSlider>
          </Carousel.Item>
          <Carousel.Item>   
          <ItemSlider>
                <div className='slider-item'>
                    <div className='slider-card'>
                        <img className='card-img' src={Slider2} alt='Compre e venda NFT’s' />
                        <div className='card-body'>   
                            <p>Recursos da CriptoGama</p>
                            <h5>Compre e venda NFT’s</h5>
                        </div>
                        <div className='card-bottom'>
                            <div className='card-icons'>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                            </div>
                            <div className='card-button'>
                                <button>CRIPTOGAMA</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ItemSlider>
          </Carousel.Item>
          <Carousel.Item>
          <ItemSlider>
                <div className='slider-item'>
                    <div className='slider-card'>
                        <img className='card-img' src={Slider3} alt='Menores taxas  (BRL)' />
                        <div className='card-body'>   
                            <p>Recursos da CriptoGama</p>
                            <h5>Menores taxas  (BRL)</h5>
                        </div>
                        <div className='card-bottom'>
                            <div className='card-icons'>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                                <div className='icon-item'>
                                    <img className='icon-img' src={ethe}/>
                                </div>
                            </div>
                            <div className='card-button'>
                                <button>CRIPTOGAMA</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ItemSlider>
          </Carousel.Item>
        </Carousel>
      );
}

export default CardsSlider