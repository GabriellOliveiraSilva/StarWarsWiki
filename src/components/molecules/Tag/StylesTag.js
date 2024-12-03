import styled from "styled-components/native";

export const StylesTag = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=> theme.colors.red};
    padding: ${({theme})=> theme.metrics.px(6)}px;
    border-radius: ${({theme})=> theme.metrics.px(24)}px;
    min-width: ${({theme})=> theme.metrics.px(50)}px;
    max-width: ${({theme})=> theme.metrics.px(80)}px;
    margin-top: ${({mt, theme}) => theme.metrics.px(mt || 0)}px ;
    margin-left: ${({ml, theme}) => theme.metrics.px(ml || 0)} px;
    margin-right: ${({mr, theme}) => theme.metrics.px(mr || 0)} px;
    margin-bottom: ${({mb, theme}) => theme.metrics.px(mb || 0)} px;
`