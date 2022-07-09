import React, { useContext, useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchlist';
import Coin from './Coin';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchlist } = useContext(WatchListContext);
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

  const coinRenderer = () => {
    if (loading) return <div>Loading Data</div>;

    return (
      <ul className='coinlist list-group mt-2'>
        {coins.map(coin => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };
  return <div>{coinRenderer()}</div>;
};

export default CoinList;
