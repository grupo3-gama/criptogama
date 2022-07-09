import React from 'react';
import CoinList from '../Components/CoinList';
import Coins from '../Components/Coins';

const CoinSummary = () => {
  return (
    <div>
      <Coins />
      <CoinList />
    </div>
  )
}
export default CoinSummary;