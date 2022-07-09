import React, { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListProvider = props => {
  const [watchlist, setWatchList] = useState(['bitcoin', 'ethereum', 'theter']);

  return (
    <WatchListContext.Provider
      value={{ watchlist }}>
        {props.children}
      </WatchListContext.Provider>
  );
};
