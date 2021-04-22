import { DaysProps } from 'shared/components/Days/types';
import { TempProps } from 'shared/components/Temp/types';
import IconCodeProps from 'utils/renderIcon/types';

export type WeatherBodyProps = TempProps & IconCodeProps & DaysProps;
