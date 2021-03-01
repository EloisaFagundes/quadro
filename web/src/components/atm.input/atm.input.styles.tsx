import styled, { css } from 'styled-components';

import { ILabel } from './atm.input';
import {
  Spacing,
  Color,
  BorderRadius,
  FontFamily,
  FontSize,
} from '../obj.constants';

interface LabelProps {
  isActive?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label<ILabel & LabelProps>`
  display: flex;
  position: absolute;

  /* width: 100%; */

  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  padding-left: ${Spacing.XLarge};
  text-transform: capitalize;
  transition: all 0.1s linear;
  margin-top: 17px;
  color: ${Color.GrayXDark};
  transition: all 0.1s linear;
  pointer-events: none;

  .show {
    top: -10px;
  }

  ${(props) =>
    props.icon &&
    css`
      left: 95%;
    `}

  ${(props) =>
    props.isActive &&
    css`
      transform: scale(0.6) translateY(-30px);
      color: ${Color.GrayLight};
    `}
`;

export const Input = styled.input<ILabel>`
  position: relative;
  border: transparent;
  background-color: ${Color.Secondary};
  border-radius: ${BorderRadius.Medium};
  padding: ${Spacing.XLarge};
  padding-left: ${(props) => (props.icon ? '40px' : '16px')};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};

  &::placeholder {
    color: ${Color.GrayDark};
    z-index: 3;
    padding-left: 50px;
    &:focus {
      overflow: hidden;
    }
  }

  &:focus {
    opacity: none;
    border: 2px solid ${Color.CallToAction};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    padding: ${Spacing.XLarge};
    ~ svg {
      fill: ${Color.Alert};
    }
  }

  &:focus + ${Label} {
    margin-top: 6px;
    transform: scale(0.6) translateY(-10px);
    color: ${Color.GrayLight};
  }
`;
