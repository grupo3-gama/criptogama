import React, { useContext, useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchlist';
import Coin from './Coin';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchlist, deleteCoin } = useContext(WatchListContext);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);

      const response = await coinGecko.get('/coins/markets/', {
        params: {
          vs_currency: 'usd',
          ids: watchlist.join(','),
        },
      });

      setCoins(response.data);

      setLoading(false);
    };

    if (watchlist.lenght > 0) {
      fetchApiData();
    } else {
      setCoins([]);
    }

    fetchApiData();
  }, [watchlist]);

  const coinRenderer = () => {
    if (loading) {
      return <div>Loading Data</div>;
    }
    return (
      <ul className='coinlist list-group mt-2'>
        {coins.map(coin => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
      </ul>
    );
  };

  return <div>{coinRenderer()}</div>;
};

export default CoinList;
