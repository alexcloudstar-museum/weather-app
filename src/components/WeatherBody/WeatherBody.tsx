import React from 'react';
import './WeatherBody.css';
import Days from '../Days/Days';
import Icon from '../Icon/Icon';
import Temp from '../Temp/Temp';

const WeatherBody: React.FC<WeatherBodyProps> = ({
  day,
  icon,
  minTemp,
  maxTemp,
  description,
}) => {
  return (
    <div className='WeatherBody card'>
      <Days day={day} />
      <Icon icon={icon} />
      <Temp minTemp={minTemp} maxTemp={maxTemp} description={description} />
    </div>
  );
};

export default WeatherBody;
