import { FC, useState } from 'react';
import { WeatherContext } from 'context/weatherContext';
import GlobalStyle from 'globalStyles';
import { weatherService } from 'services';
import { SearchBar, WeatherContainer, Loader } from 'shared';
import { WeatherContextParams } from 'context';

const App: FC = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<WeatherContextParams[]>([]);

  const searchCity = async (city: string) => {
    setCity(city);
    setLoading(true);
    const weather = await weatherService(city);
    setWeather(weather);
    setLoading(false);
  };

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      <GlobalStyle />
      {loading ? (
        <Loader message={'Loading data...'} />
      ) : (
        <div className='App'>
          <SearchBar city={city} searchCity={searchCity} />
          <WeatherContainer city={city} />
        </div>
      )}
    </WeatherContext.Provider>
  );
};

export default App;
