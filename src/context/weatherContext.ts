import { createContext, useContext } from 'react';

export type WeatherContextType = {
  weather: {
    datetime: string;
    weather: { code: number; description: string };
    min_temp: number;
    max_temp: number;
  }[];
  setWeather: (params: any) => void;
};

export const WeatherContext = createContext<WeatherContextType>({
  weather: [],
  setWeather: (params: any) => {},
});

export const useWeatherContext = () => useContext(WeatherContext);
