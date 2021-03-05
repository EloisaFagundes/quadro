import React from 'react';
import { ButtonKind, ButtonStyled, ButtonWrapper } from './atm.button.style';

export interface ButtonProps {
  kind?: ButtonKind;
  outlined?: boolean;
  onClick?: () => void;
  onSubmit?: () => void;
  disabled?: boolean;
  children?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  outlined,
  kind,
  onSubmit,
  onClick,
  type,
  ...props
}) => {
  return (
    <ButtonWrapper>
      <ButtonStyled
        kind={kind}
        outlined={outlined}
        disabled={disabled}
        onSubmit={onSubmit}
        onClick={onClick}
        type={type}
        {...props}
      >
        {children}
      </ButtonStyled>
    </ButtonWrapper>
  );
};
