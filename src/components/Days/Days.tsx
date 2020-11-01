import React from 'react';
import './Days.css';

const Days: React.FC<DaysProps> = ({ day }) => {
  return <div className='Days'>{day}</div>;
};

export default Days;
