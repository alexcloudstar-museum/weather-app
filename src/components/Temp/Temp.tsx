import React from 'react';
import './Temp.css';

const Temp: React.FC<TempProps> = ({ minTemp, maxTemp }) => {
  return (
    <div className='Temp'>
      <span className='min'>{minTemp}&#176;</span>
      <span className='max'>{maxTemp}&#176;</span>
    </div>
  );
};

export default Temp;
