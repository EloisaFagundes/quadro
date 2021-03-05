/* eslint-disable react/destructuring-assignment */
import * as React from 'react';

import { Label, InputStyled, Container } from './atm.input.styles';

export interface Props {
  name: string;
  value?: string;
  setValue?: (text: any) => void;
  initialValue?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
  icon?: React.ReactNode | React.Component;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
}

export const Input: React.FC<Props> = (props, Error) => {
  const [isActive, setIsActive] = React.useState(false);
  const [value, setValue] = React.useState(props.initialValue);

  console.log(value, 'input value');

  function handleTextChange(text: string) {
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  if (props.value && props.initialValue) {
    return new Error();
  }

  const isControlled = props.value;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (!isControlled) {
      setValue(value);
    }
    props.onChange(value);
  };

  const handleOnChangeOptions: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    handleChange(event);
    handleTextChange(event.target.value);
  };

  return (
    <Container>
      <InputStyled
        id={props.name}
        name={props.name}
        type={props.type}
        value={isControlled ? props.value : value}
        placeholder={props.placeholder}
        onChange={handleOnChangeOptions}
      />
      <Label htmlFor={props.name} icon={props.icon} isActive={isActive}>
        {props.icon || (props.icon && props.name) || props.name}
      </Label>
    </Container>
  );
};
