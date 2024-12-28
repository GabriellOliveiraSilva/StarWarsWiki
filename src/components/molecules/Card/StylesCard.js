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
  height: ${({ theme }) => theme.metrics.px(100)}px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const StylesCardCategoriesAll = styled.TouchableOpacity`
  width: 100%; /* Espaço ajustado para permitir margem */
  height: ${({ theme }) => theme.metrics.px(200)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3%; /* Margem para espaçamento entre itens */
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  /* Sombras para Android */

  border: solid red 2px;
`;

export const StylesCardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
