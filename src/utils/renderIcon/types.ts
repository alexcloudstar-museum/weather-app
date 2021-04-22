import { PropsWithChildren, ReactNode } from 'react';

interface IconCodeProps {
  iconCode: number;
  iconElement?: PropsWithChildren<IconCodeProps> | ReactNode;
}

export default IconCodeProps;
