import { FC } from 'react';

import Cloudy from 'assets/cloudy.svg';
import Rain from 'assets/rain.svg';
import Snowing from 'assets/snowing.svg';
import Thermometer from 'assets/thermometer.svg';
import { IconCodeProps } from 'utils';

const renderIcon: FC<IconCodeProps> = ({ iconCode }) => {
  switch (iconCode) {
    case 801:
      return <img className='icon' src={Cloudy} alt={Cloudy} />;

    case 802:
      return <img className='icon' src={Cloudy} alt={Cloudy} />;

    case 803:
      return <img className='icon' src={Cloudy} alt={Cloudy} />;

    case 200:
      return <img className='icon' src={Rain} alt={Rain} />;

    case 201:
      return <img className='icon' src={Rain} alt={Rain} />;

    case 202:
      return <img className='icon' src={Rain} alt={Rain} />;

    case 600:
      return <img className='icon' src={Snowing} alt={Snowing} />;

    case 601:
      return <img className='icon' src={Snowing} alt={Snowing} />;

    case 602:
      return <img className='icon' src={Snowing} alt={Snowing} />;

    case 610:
      return <img className='icon' src={Snowing} alt={Snowing} />;

    default:
      return <img className='icon' src={Thermometer} alt={Thermometer} />;
  }
};

export default renderIcon;
