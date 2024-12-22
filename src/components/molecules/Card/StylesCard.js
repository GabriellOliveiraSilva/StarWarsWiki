import styled from "styled-components/native";

export const StylesCard = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(88)}px;
  height: ${({ theme }) => theme.metrics.px(128)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  overflow: hidden;
  margin: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const StylesCardCategories = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.metrics.px(10)}px;
  width: ${({ theme }) => theme.metrics.px(350)}px;
  margin: ${({ theme }) => theme.metrics.px(5)}px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const StylesCardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
