import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { MoedaUnica } from '../../../../Config/Api'

const DescTexto = () => {

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
    <div>{(coin?.description.en.split(". ")[0])}</div>
  )
}

export default DescTexto