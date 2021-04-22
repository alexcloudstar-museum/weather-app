import { FC } from 'react';
import Spinner from 'assets/Spinner.gif';
import { LoaderWrapper } from './style';
import { LoaderProps } from './types';

const Loader: FC<LoaderProps> = ({ message }) => (
  <LoaderWrapper className='Loader'>
    <img src={Spinner} alt='Spinner' />
    <h6 className='text-center-mt-3'>{message}</h6>
  </LoaderWrapper>
);

export default Loader;
