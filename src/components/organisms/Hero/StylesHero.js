import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
export const StylesHero = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)};
`;

export const StylesHeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const StylesHeroLinearGradiaent = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)};
  padding-top: ${({ theme }) => theme.metrics.px(56)};
`;

export const StylesButtonsView = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
`;
