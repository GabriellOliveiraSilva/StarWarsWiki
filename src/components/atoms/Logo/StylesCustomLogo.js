import styled from 'styled-components/native';
import { Image } from 'react-native';

export const StylesCustomLogo = styled(Image)`
  width: ${({ width }) => width || '64px'};
  height: ${({ height }) => height || '64px'};

  margin-top: ${({ mt, theme }) => theme.metrics.px(mt) || '0'}px;
`;

