import React, { createContext, useEffect, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListProvider = props => {
  const [watchlist, setWatchList] = useState(
    localStorage.getItem('watchlist').split(',') || [
      'bitcoin',
      'ethereum',
      'theter',
    ]
  );
  const deleteCoin = coin => {
    setWatchList(watchlist.filter(e => e !== coin));
  };

  useEffect(() => {
    localStorage.setItem('watchlist', watchlist);
  }, [watchlist]);

  const addCoin = coin => {
    if (watchlist.indexOf(coin) === -1) {
      setWatchList([...watchlist, coin]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchlist, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
