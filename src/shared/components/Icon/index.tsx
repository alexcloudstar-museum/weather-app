import { FC } from 'react';
import { IconCodeProps, renderIcon } from 'utils';
import { IconWrapper } from './style';

export const Icon: FC<IconCodeProps> = ({ iconElement }) => (
  <IconWrapper>{renderIcon(iconElement)}</IconWrapper>
);
