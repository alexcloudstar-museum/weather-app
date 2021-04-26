import { WeatherContextParams } from 'context';
import { createContext, SetStateAction, useContext } from 'react';

export type WeatherContextType = {
  weather: WeatherContextParams[] | [];
  setWeather: (value: SetStateAction<WeatherContextParams[]>) => void;
};

export const WeatherContext = createContext<WeatherContextType>({
  weather: [],
  setWeather: (value: SetStateAction<WeatherContextParams[]>) => {},
});

export const useWeatherContext = () => useContext(WeatherContext);
