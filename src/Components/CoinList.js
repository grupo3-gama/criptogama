import React, { useContext, useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchlist';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const {watchlist} = useContext(WatchListContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      const response = await coinGecko.get('/coins/markets', {
        vs_currency: 'usd',
        ids: watchlist.join(','),
      });
      setCoins(response.data);
      setLoading(false);
    };
    fetchApiData();
  }, []);
  return <div>CoinList</div>;
};

export default CoinList;
