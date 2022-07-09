import React, { useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchApiData = async () => {
      const response = await coinGecko.get('/coins/markets', {
        vs_currency: 'usd',
        ids: 'bitcoin, ethereum',
      });
    };
    fetchApiData();
  }, []);
  return <div>CoinList</div>;
};

export default CoinList;
