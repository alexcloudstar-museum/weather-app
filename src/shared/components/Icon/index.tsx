import { FC } from 'react';
import { IconCodeProps, renderIcon } from 'utils';
import { IconWrapper } from './style';

const Icon: FC<IconCodeProps> = ({ iconCode }) => (
  <IconWrapper>{renderIcon(iconCode)}</IconWrapper>
);

export default Icon;
