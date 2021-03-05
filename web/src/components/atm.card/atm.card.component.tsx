import * as React from 'react';
import { CardStyled } from './atm.card.styled';

export const Card: React.FC = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};
