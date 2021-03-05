/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ICSearchStyled, IconBorderWrapper } from './atm.icon.style';

interface IconProps {
  iconRounded?: boolean;
  fill?: string;
}

export const RiIcon = {
  IcSearch: (props: IconProps) => (
    <IconBorderWrapper iconRounded={props.iconRounded}>
      <ICSearchStyled fill={props.fill} />
    </IconBorderWrapper>
  ),
};
