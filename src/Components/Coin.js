import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to='/coin' className='text-decoration-none my-1 coin'>
      <li className='coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark'>
        <img className='coinlist-image' src={coin.image} alt={coin.name} />
        <span className='text-decoration-none'>{coin.current_price}</span>
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? 'text-danger mr-2'
              : 'text-sucess mr-2'
          }>
          {coin.current_price_pecentage_24h < 0 ? (
            <i className='fas fa-sort-down align-middle mr-1'></i>
          ) : (
            <i className='fas fa-sort-up align-middle mr-1'></i>
          )}
          {coin.price_change_percentage_24h}
        </span>
        <i
          onClick={e => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className='delete-icon far fa-times-circle text-danger'></i>
      </li>
    </Link>
  );
};

export default Coin;
