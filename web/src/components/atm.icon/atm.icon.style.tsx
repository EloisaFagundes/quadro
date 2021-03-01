import styled, { css } from 'styled-components';
import { Color } from '../obj.constants';

import { IcSearch } from './icons';

interface IconProps {
  iconRounded?: boolean;
}

export const IconBorderWrapper = styled.div<IconProps>`
  ${(props) =>
    props.iconRounded
      ? css`
          display: flex;
          align-items: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: ${Color.CallToAction};
          fill: ${Color.White};
        `
      : `fill: ${Color.GrayDark}`};
`;

const iconCss = css<IconProps>`
  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.9;
  }
`;

export const ICSearchStyled = styled(IcSearch)`
  ${iconCss}

  display: flex;
  align-items: center;
  width: 28px;
  height: 28px;
  padding: 5px;

  /* ${(props) =>
    props.iconRounded &&
    css`
      display: flex;
      left: 95%;
    `}; */
`;
