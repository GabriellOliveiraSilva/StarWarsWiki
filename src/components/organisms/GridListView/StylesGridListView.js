import styled from "styled-components/native";

// Estilizando o FlatList com duas colunas
export const StylesGridListView = styled.FlatList.attrs({
  numColumns: 2, // Valor padrão, se desejado
})`
  width: 100%;
`;
