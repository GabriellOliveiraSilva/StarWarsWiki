import styled from 'styled-components/native';
import { Image } from 'react-native';

export const StylesCustomImage = styled(Image)`
  width: ${({ width,theme }) => theme.metrics.px(width) || '64'}px;
  height: ${({ height,theme }) => theme.metrics.px(height) || '64'}px;
  margin-top: ${({ mt, theme }) => theme.metrics.px(mt) || '0'}px;
`;

