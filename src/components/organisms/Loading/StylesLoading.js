import styled from "styled-components/native";

export const StylesLoading = styled.View`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${({dir}) => dir || 'column'};
    align-items: ${({align}) => align || 'flex-start'};
    justify-content: ${({justify}) => justify || 'flex-start'};

`