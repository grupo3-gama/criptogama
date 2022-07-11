import React, { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListProvider = props => {
  const [watchlist, setWatchList] = useState(['bitcoin', 'ethereum', 'theter']);
  const deleteCoin = coin => {
    setWatchList(watchlist.filter(e => e !== coin));
  };

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
