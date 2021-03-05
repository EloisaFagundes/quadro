import styled, { css } from 'styled-components';
import { Color, Spacing, BorderRadius } from '../obj.constants';

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
          justify-content: center;
          width: ${Spacing.XXLarge};
          height: ${Spacing.XXLarge};
          border-radius: ${BorderRadius.Large};
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

  width: ${Spacing.XLarge};
  height: ${Spacing.XLarge};
  padding: ${Spacing.Micro};
`;
