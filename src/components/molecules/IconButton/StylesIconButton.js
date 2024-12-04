import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const StylesIconButton = styled.TouchableOpacity`

    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: ${({align})=> align ? align : 'center'};

`