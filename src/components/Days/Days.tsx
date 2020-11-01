import React from 'react';
import './Days.css';
import { DaysProps } from '../../types';

const Days: React.FC<DaysProps> = ({ day }) => {
  return <div className='Days'>{day}</div>;
};

export default Days;
