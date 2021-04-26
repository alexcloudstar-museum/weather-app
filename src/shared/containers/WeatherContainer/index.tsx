import { FC } from 'react';

import { useWeatherContext, WeatherContextParams } from 'context';
import { WeatherBody } from 'shared';

import { WeatherContainerWrapper } from './style';
import { WeatherContainerProps } from './types';

import { DateTime } from 'luxon';

const WeatherContainer: FC<WeatherContainerProps> = ({ city }) => {
  const { weather } = useWeatherContext();

  return (
    <WeatherContainerWrapper city={city}>
      {city && <h5 className='cityName'>{city}</h5>}
      {weather &&
        weather.map((weatherData: WeatherContextParams) => {
          const { datetime, weather, min_temp, max_temp } = weatherData;
          const { code, description } = weather;

          const parsedDateToNumbers = datetime.split('-').map(date => +date);

          const parsedData = DateTime.local(
            parsedDateToNumbers[0],
            parsedDateToNumbers[1],
            parsedDateToNumbers[2]
          ).weekdayLong;

          return (
            <WeatherBody
              day={parsedData}
              iconCode={code}
              minTemp={Math.round(min_temp)}
              maxTemp={Math.round(max_temp)}
              description={description}
              key={datetime}
            />
          );
        })}
    </WeatherContainerWrapper>
  );
};

export default WeatherContainer;
