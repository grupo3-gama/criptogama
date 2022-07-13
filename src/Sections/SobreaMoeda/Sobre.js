import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import { MoedaUnica } from '../../Config/Api'
import Descricao from '../../Components/Descricao/Descricao';
import './sobre.css'

const Sobre = () => {

    const { id } = useParams();
    const [coin, setCoin] = useState();
    const fetchCoin = async () => {
    const { data } = await axios.get(MoedaUnica(id));
    setCoin(data);
  }

  useEffect(() =>{
    fetchCoin();
  },[]);

  return (
    <div className='sobre-content'>
        <Container className='sobre-container'>
            <div className='sobre-left'>
                <div className='card-image'>
                    <img className='sobre-img' src={coin?.image.large} alt={coin?.name}/>
                </div>
            </div>
            <div className='sobre-right'>
                <div className='sobre-info'>
                    <h1 className='glitch'>
                        <span aria-hidden="true">{coin?.name}</span>
                            {coin?.name}
                        <span aria-hidden="true">{coin?.name}</span>
                    </h1>
                    <div className='separador'/>
                </div>
                <Descricao />
            </div>
        </Container>
    </div>
  )
}

export default Sobre