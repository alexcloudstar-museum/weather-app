import { FC } from 'react';
import { DaysWrapper } from 'shared/components/Days/style';
import { DaysProps } from 'shared/components/Days/types';

const Days: FC<DaysProps> = ({ day }) => <DaysWrapper>{day}</DaysWrapper>;

export default Days;
