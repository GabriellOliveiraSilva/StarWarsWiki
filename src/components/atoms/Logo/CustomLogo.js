import React from "react";
import { Image } from "react-native";
import {StylesCustomLogo} from './StylesCustomLogo'


export const CustomLogo = ({source, width, height})=>
{
    return(
        <StylesCustomLogo
        source={source}
        width={width}
        height={height}
        ></StylesCustomLogo>
    )
}

