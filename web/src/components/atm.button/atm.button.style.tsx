import styled, { css } from 'styled-components';
import ColorFunc from 'color';
import {
  Color,
  FontFamily,
  BorderRadius,
  Shadow,
  FontSize,
} from '../obj.constants';

const buttonColors = (
  kind: ButtonKind,
  outlined: boolean,
): { bg: string; border: string; text: string } => {
  if (outlined) {
    const outlinedButtons = {
      primary: {
        bg: Color.White,
        border: Color.Primary,
        text: Color.Primary,
      },
      secondary: {
        bg: Color.White,
        border: Color.Secondary,
        text: Color.Secondary,
      },
      neutral: { bg: Color.White, border: Color.Neutral, text: Color.Neutral },
      callToAction: {
        bg: Color.White,
        border: Color.CallToAction,
        text: Color.CallToAction,
      },
      accessory: {
        bg: Color.White,
        border: Color.Accessory,
        text: Color.Accessory,
      },
      alert: { bg: Color.White, border: Color.Alert, text: Color.Alert },
      link: { bg: 'transparent', border: 'transparent', text: Color.Primary },
    };
    return outlinedButtons[kind];
  }

  const solidButtons = {
    primary: {
      bg: Color.Primary,
      border: Color.Primary,
      text: Color.White,
    },
    secondary: {
      bg: Color.Secondary,
      border: Color.Secondary,
      text: Color.White,
    },
    neutral: {
      bg: Color.Neutral,
      border: Color.Neutral,
      text: Color.Accessory,
    },
    callToAction: {
      bg: Color.CallToAction,
      border: Color.CallToAction,
      text: Color.White,
    },
    accessory: {
      bg: Color.Accessory,
      border: Color.Accessory,
      text: Color.White,
    },
    alert: { bg: Color.Alert, border: Color.Alert, text: Color.White },
    link: { bg: 'transparent', border: 'transparent', text: Color.Primary },
  };
  return solidButtons[kind];
};

export type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'callToAction'
  | 'link'
  | 'alert';

export interface ButtonStyleProps {
  outlined?: boolean;
  disable?: boolean;
  kind?: ButtonKind;
}

export const ButtonCSS = css<ButtonStyleProps>`
  background-color: ${(props) => buttonColors(props.kind!, props.outlined!).bg};
  color: ${(props) => buttonColors(props.kind!, props.outlined!).text};
  padding: 18px 28px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${FontFamily.Primary};
  border-radius: ${BorderRadius.Medium};
  border: none;
  ${(props) =>
    props.outlined &&
    `border: 2px solid ${buttonColors(props.kind!, props.outlined!).border}`};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    background-color: ${Color.GrayLight};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: ${Shadow.Small};
    background-color: ${(props) =>
      ColorFunc(buttonColors(props.kind!, props.outlined!).bg)
        .darken(0.3)
        .hsl()
        .string()};
  }

  :active:not(:disabled) {
    box-shadow: ${Shadow.Small};
  }
`;

export const ButtonStyled = styled.button`
  ${ButtonCSS}

  &:focus {
    outline: 0;
  }
`;

export const LinkButton = styled.a`
  ${ButtonCSS}
  font-size: ${FontSize.Small};
  display: inline-block;
  color: ${Color.Primary};
  padding: 0;
  text-decoration: none;
`;

export const LinkUnderline = styled(LinkButton)`
  text-decoration: underline;
  height: 0;
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 10px;
`;
