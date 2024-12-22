import styled from "styled-components/native";

export const StylesCategoriesList = styled.FlatList.attrs({
  contentContainerStyle: {
    flexGrow: 1, // Garante que o conteúdo ocupe todo o espaço
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
  },
})`
  width: 100%;
`;
