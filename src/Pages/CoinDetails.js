import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChartHistory from '../Components/ChartHistory';
import CoinData from '../Components/CoinData';
import coinGecko from '../apis/coinGecko';

const CoinDetails = () => {
  const { id } = useParams();

  const [coinData, setCoinData] = useState({});

  const [loading, setLoading] = useState(false);

  const dataFormating = data => {
    return data.map(el => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true);

      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '1',
          },
        }),

        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '7',
          },
        }),

        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '365',
          },
        }),

        coinGecko.get('/coins/markets/', {
          params: {
            vs_currency: 'usd',
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: dataFormating(day.data.prices),
        week: dataFormating(week.data.prices),
        year: dataFormating(year.data.prices),
        detail: detail.data[0],
      });

      setLoading(false);
    };

    fetchingData();
  }, [id]);

  const renderData = () => {
    if (loading) {
      return <div>Loading Data</div>;
    }

    return (
      <div className='coinlist'>
        <ChartHistory data={coinData} />
        <CoinData data={coinData.detail} />
      </div>
    );
  };

  return renderData();
};

export default CoinDetails;
