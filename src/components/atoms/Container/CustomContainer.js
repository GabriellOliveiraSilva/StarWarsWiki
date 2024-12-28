import { View } from "react-native";
import styled from "styled-components/native";

export const CustomContainer = styled(View)`
  display: flex;
  flex-direction: ${({ dir }) => dir || "column"};
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  background-color: ${({ bg, theme }) => theme.colors[bg || "dark"]};
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : "100%")};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : "100%")};
  padding: ${({ theme, p }) => (p ? `${theme.metrics.px(p)}px` : "0")};
`;
