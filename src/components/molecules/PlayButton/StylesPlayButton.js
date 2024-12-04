import styled from "styled-components/native";

export const StylesPlayButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${({theme}) => theme.metrics.px(36)}px;
    width: ${({theme}) => theme.metrics.px(100)}px;
    border-radius:${({theme}) => theme.metrics.px(8)}px ;
    background-color: ${({theme})=> theme.colors.white};
`