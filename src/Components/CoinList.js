import React, { useContext, useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchlist';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const {watchlist} = useContext(WatchListContext)
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
