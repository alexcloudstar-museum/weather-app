import { FC } from 'react';
import { TempWrapper } from './style';
import { TempProps } from './types';

export const Temp: FC<TempProps> = ({ minTemp, maxTemp }) => (
  <TempWrapper>
    <span className='min'>{minTemp}&#176;</span>
    <span className='max'>{maxTemp}&#176;</span>
  </TempWrapper>
);
