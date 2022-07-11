import React, {useState, useEffect} from 'react'
import AliceCarousel from "react-alice-carousel";
import { MoedaAlta } from "../Config/Api";
import { CryptoState } from "../Config/Mudarmoeda";
import './css/Alta.css'
import axios from 'axios';

export function numeroCasas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const CarouselAlta = () => {

    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();

    const buscarMoedaAlta = async () => {
    const { data } = await axios.get(MoedaAlta(currency));
    setTrending(data);
  };

  useEffect(() => {
    buscarMoedaAlta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);

    const responsive = {
      0: {
        items: 2,
      },
      512: {
        items: 4,
      },
    }

    const items = trending.map((coin) => {

      let lucro = coin.price_change_percentage_24h >= 0;

      return(
        <a className='moeda-cont' href={`/moeda/${coin.id}`}>
          <img 
          src={coin?.image}
          alt={coin.name}
          className='moeda-img'
          height="80"
          style={{marginBottom: 10}}
          />
          <div className='moeda-texto'>
            <span className='moeda-symb'>
              {coin?.symbol}&nbsp;
              <span className='moeda-lucro'
              style={{
                color: lucro > 0? "rgb(14,203,129)" : "red",
              }}
              >
                {lucro && "+"} 
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </span>
            <span className='moeda-valor'>
              {symbol} {numeroCasas(coin?.current_price.toFixed(2))}
            </span>
          </div>
        </a>
      );
    })

  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
        disableButtonsControls
      />
    </div>
  )
}

export default CarouselAlta