import React from 'react';
import CoinList from '../Components/CoinList';
import Coins from '../Components/Coins';

const CoinSummary = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <Coins />
      <CoinList />
    </div>
  )
}
export default CoinSummary;