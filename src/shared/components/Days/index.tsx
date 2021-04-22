import { FC } from 'react';

import { DaysWrapper } from './style';
import { DaysProps } from './types';

export const Days: FC<DaysProps> = ({ day }) => (
  <DaysWrapper>{day}</DaysWrapper>
);
