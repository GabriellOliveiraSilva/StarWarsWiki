import React from "react";
import { Image } from "react-native";
import {StylesCustomImage} from './StylesCustomImage'


export const CustomImage = ({source, width, height, mt})=>
{
    return(
        <StylesCustomImage
        source={source}
        width={width}
        height={height}
        mt={mt}
        ></StylesCustomImage>
    )
}

