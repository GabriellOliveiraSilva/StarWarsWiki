import React from "react";
import { Text } from "react-native";
import {StylesCustomText} from './StylesCustomText';

export const CustomText = ({text, color, font}) =>{
    return (
        <StylesCustomText font={font} color={color}>
            {text}
        </StylesCustomText>
    )
}

