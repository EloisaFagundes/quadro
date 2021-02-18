import React from 'react';
import { ButtonKind, ButtonStyled, ButtonWrapper } from './atm.button.style';

export interface ButtonProps {
  kind?: ButtonKind;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  outlined = false,
  kind,
  ...props
}) => {
  return (
    <ButtonWrapper>
      <ButtonStyled
        kind={kind}
        outlined={outlined}
        disabled={disabled}
        {...props}
      >
        {children}
      </ButtonStyled>
    </ButtonWrapper>
  );
};
