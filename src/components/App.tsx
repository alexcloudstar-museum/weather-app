import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../globalStyles';
import API from '../api';
import { SearchBar } from './SearchBar';
import WeatherBody from './WeatherBody/WeatherBody';
import { Loader } from './Loader';

const WeatherContainer = styled.div<{ city: string }>`
  width: 100%;
  background: rgb(249, 157, 149);
  background: -moz-linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f99d95",endColorstr="#cf6367",GradientType=1);

  .cityName {
    display: none;
  }

  @media (min-width: 1399px) {
    width: ${({ city }) => (city ? '70%' : undefined)};
    height: 100vh;
    display: ${({ city }) => (city ? 'flex' : 'none')};
    text-align: center;
    align-items: center;
    justify-content: center;

    .cityName {
      display: block;
      position: absolute;
      top: 100px;
      text-transform: uppercase;
      letter-spacing: 5px;
      color: #fff;
      font-size: 30px;
    }
  }
`;

const App = () => {
  const [temp, setTemp] = useState<TempProps[]>([]);
  const [city, setCity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const searchCity = async (city: string) => {
    setLoading(true);
    await API.get(
      `daily?city=${city}&key=3883f69ab25f46dc92cdf2b5d66a1517`
    ).then(res => {
      console.log(res.data.data);
      setTemp(res.data.data);
      setCity(res.data.city_name);
    });
  };

  useEffect(() => {
    searchCity(city);
    setLoading(false);
  }, [city]);

  const minTemp =
    temp &&
    temp.map((t: any): number => {
      return parseInt(t.low_temp);
    });

  const maxTemp =
    temp &&
    temp.map((t: any): number => {
      return parseInt(t.max_temp);
    });

  const icon =
    temp &&
    temp.map((t: any): number => {
      return t.weather.code;
    });

  const description =
    temp &&
    temp.map((t: any): string => {
      return t.weather.description;
    });

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <div>
          <Loader message={'Loading data...'} />
        </div>
      ) : (
        <div className='App'>
          <React.Fragment>
            <SearchBar city={city} searchCity={searchCity} />
          </React.Fragment>
          <WeatherContainer city={city} className='pt-3 pb-3'>
            {city && <h5 className='cityName'>{city}</h5>}
            <WeatherBody
              day={'Mon'}
              icon={icon[0]}
              minTemp={minTemp[0]}
              maxTemp={maxTemp[0]}
              description={description[0]}
            />
            <WeatherBody
              day={'Tue'}
              icon={icon[1]}
              minTemp={minTemp[1]}
              maxTemp={maxTemp[1]}
              description={description[1]}
            />
            <WeatherBody
              day={'Wed'}
              icon={icon[2]}
              minTemp={minTemp[2]}
              maxTemp={maxTemp[2]}
              description={description[2]}
            />
            <WeatherBody
              day={'Thu'}
              icon={icon[3]}
              minTemp={minTemp[3]}
              maxTemp={maxTemp[3]}
              description={description[3]}
            />
            <WeatherBody
              day={'Fri'}
              icon={icon[4]}
              minTemp={minTemp[4]}
              maxTemp={maxTemp[4]}
              description={description[4]}
            />
          </WeatherContainer>
        </div>
      )}
    </>
  );
};

export default App;
