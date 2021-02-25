import React, { useState } from 'react';

import { Label, Input, Container } from './atm.input.styles';

export interface Props {
  name: string;
  value: string;
  setValue: (text: string) => void;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode | React.Component;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
}

export const InputLabel: React.FC<Props> = ({
  name,
  type,
  value,
  setValue,
  placeholder,
  icon,
}) => {
  const [isActive, setIsActive] = useState(false);

  function handleTextChange(text: string) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <Container>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <Label htmlFor={name} icon={icon} className={isActive ? 'Active' : ''}>
        {icon || (icon && name) || name}
      </Label>
    </Container>
  );
};
