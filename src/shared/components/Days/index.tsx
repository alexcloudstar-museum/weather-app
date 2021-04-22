import { FC } from 'react';

import { DaysWrapper } from './style';
import { DaysProps } from './types';

const Days: FC<DaysProps> = ({ day }) => <DaysWrapper>{day}</DaysWrapper>;

export default Days;
