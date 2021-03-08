import styled from 'styled-components';
import { FontFamily, FontSize, Spacing } from '../obj.constants';

export const H1 = styled.h1`
  font-size: ${FontSize.XLarge};
  font-family: ${FontFamily.Primary};
  margin-bottom: ${Spacing.Medium};
`;

export const H2 = styled.h2`
  font-size: ${FontSize.Large};
  font-family: ${FontFamily.Primary};
  margin-bottom: ${Spacing.Medium};
`;

export const H3 = styled.h3`
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
  margin-bottom: ${Spacing.Medium};
`;
