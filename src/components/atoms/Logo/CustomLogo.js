import React from "react";
import { Image } from "react-native";
import {StylesCustomLogo} from './StylesCustomLogo'


export const CustomLogo = ({source, width, height, mt})=>
{
    return(
        <StylesCustomLogo
        source={source}
        width={width}
        height={height}
        mt={mt}
        ></StylesCustomLogo>
    )
}

