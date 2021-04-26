import { FC, useEffect, useState } from 'react';
import { WeatherContext } from 'context/weatherContext';
import GlobalStyle from 'globalStyles';
import { weatherService } from 'services';
import { SearchBar, WeatherContainer } from 'shared';

const App: FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<[]>([]);

  useEffect(() => {
    (async () => {
      const weather = await weatherService(city);
      setWeather(weather);
    })();
  }, [city]);

  const searchCity = async (city: string) => {
    setCity(city);
  };

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      <GlobalStyle />
      <div className='App'>
        <SearchBar city={city} searchCity={searchCity} />
        <WeatherContainer city={city} />
      </div>
    </WeatherContext.Provider>
  );
};

export default App;
