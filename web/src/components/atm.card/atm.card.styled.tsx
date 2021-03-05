import styled from 'styled-components';
import { Color, BorderRadius, Shadow } from '../obj.constants';

export const CardStyled = styled.div`
  background: ${Color.White};
  border-radius: ${BorderRadius.Medium};
  box-shadow: ${Shadow.Small};
  text-align: center;
`;
