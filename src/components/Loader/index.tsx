import React from 'react';
import './index.css';
import Spinner from '../../assets/Spinner.gif';

export const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className='Loader'>
      <img src={Spinner} alt='Spinner' />
      <h6 className='text-center-mt-3'>{message}</h6>
    </div>
  );
};
