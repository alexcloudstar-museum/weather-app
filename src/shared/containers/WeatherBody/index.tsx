import { FC } from 'react';

import { Days, Icon, Temp } from 'shared';
import { WeatherBodyWrapper } from './style';
import { WeatherBodyProps } from './types';

const WeatherBody: FC<WeatherBodyProps> = ({
  day,
  iconCode,
  minTemp,
  maxTemp,
  description,
}) => {
  return (
    <WeatherBodyWrapper>
      <div className='WeatherBody card'>
        <Days day={day} />
        <Icon iconCode={iconCode} />
        <Temp minTemp={minTemp} maxTemp={maxTemp} description={description} />
      </div>
    </WeatherBodyWrapper>
  );
};

export default WeatherBody;
