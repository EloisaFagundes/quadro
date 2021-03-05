import * as React from 'react';
import { FormStyled } from './form.style';

interface FormDataProps {
  onSubmit?: (data: any) => void;
}

export const Form: React.FC<FormDataProps> = ({ children, onSubmit }) => {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
};
