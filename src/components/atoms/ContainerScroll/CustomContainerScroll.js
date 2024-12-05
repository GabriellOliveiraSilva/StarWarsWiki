import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const CustomContainerScroll = styled.ScrollView`
      background-color: ${({bg, theme}) => theme.colors[bg || 'dark']};


`