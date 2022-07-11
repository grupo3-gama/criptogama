import React from 'react';
import CoinList from '../Components/CoinList';
import AddCoins from '../Components/AddCoins';

const CoinSummary = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoins />
      <CoinList />
    </div>
  )
}
export default CoinSummary;