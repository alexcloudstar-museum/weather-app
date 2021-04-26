import { FC } from 'react';

import { useWeatherContext } from 'context';
import { WeatherBody } from 'shared';

import { WeatherContainerWrapper } from './style';
import { WeatherContainerProps } from './types';

const WeatherContainer: FC<WeatherContainerProps> = ({ city, children }) => {
  const { weather } = useWeatherContext();

  return (
    <WeatherContainerWrapper city={city}>
      {weather &&
        weather.map(weatherData => (
          <WeatherBody
            day={weatherData.datetime}
            iconCode={weatherData.weather.code}
            minTemp={weatherData.min_temp}
            maxTemp={weatherData.max_temp}
            description={weatherData.weather.description}
            key={weatherData.datetime}
          />
        ))}
    </WeatherContainerWrapper>
  );
};

export default WeatherContainer;
