import styled from "styled-components/native";

export const StylesHomeList = styled.View`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-horizontal: ${({ph, theme})=> theme.metrics.px(ph)};
    margin-top: ${({mt, theme})=> theme.metrics.px(mt)};

`