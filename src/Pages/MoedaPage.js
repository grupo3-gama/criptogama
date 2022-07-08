import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../Config/Mudarmoeda';
import { MoedaUnica } from '../Config/Api'
import './css/pages.css'

const MoedaPage = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState();

  const {currency, symbol} = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(MoedaUnica(id));
    setCoin(data);
  }

  useEffect(() =>{
    fetchCoin();
  },[]);

  return (
    <div className='moedapage-content'>
      <div className='moedapage-side'>
        <img
        src={coin?.image.large}
        alt={coin?.name}
        />
      </div>
      <h2>{(coin?.description.en.split(". ")[0])}.</h2>
    </div>
  )
}

export default MoedaPage