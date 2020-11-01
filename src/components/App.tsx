import React, { useState, useEffect } from 'react';
import API from '../api';
import WeatherBody from './WeatherBody/WeatherBody';
import { TempProps } from '../types';

const App = () => {
  const [temp, setTemp] = useState<TempProps[]>([]);
  const [city, setCity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const searchCity = async (city: string) => {
    await API.get(
      `daily?city=${city}&key=3883f69ab25f46dc92cdf2b5d66a1517`
    ).then(res => {
      console.log(res.data.data);
      setTemp(res.data.data);
      setCity(res.data.city_name);
    });
  };

  useEffect(() => {
    searchCity('Iasi');
    setLoading(false);
  }, []);

  const minTemp =
    temp &&
    temp.map((t: any) => {
      return parseInt(t.low_temp);
    });

  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
        <div className='App'>
          <div className='weatherContainer pt-3 pb-3'>
            <WeatherBody
              day={'Mon'}
              icon={'Sun'}
              minTemp={minTemp[0]}
              maxTemp={25}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
