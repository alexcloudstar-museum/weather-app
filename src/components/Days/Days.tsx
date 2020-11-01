import React from 'react';
import './Days.css';

export const Days: React.FC<DaysProps> = ({ day }) => {
  return <div className='Days'>{day}</div>;
};
