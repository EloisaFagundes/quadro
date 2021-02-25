import styled from 'styled-components';

import { ILabel } from './atm.input';
import {
  Spacing,
  Color,
  BorderRadius,
  FontFamily,
  FontSize,
} from '../obj.constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .Active {
    transform: scale(0.6) translateY(-30px);
    color: ${Color.GrayLight};
  }
`;

export const Label = styled.label<ILabel>`
  display: flex;
  position: absolute;
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

  ~ svg {
    fill: ${Color.GrayDark};
    position: relative;
    left: 12px;
    top: 16px;
    width: 24px;
    height: 24px;
    transition: 180ms ease-in-out;
    left: -39px;
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
