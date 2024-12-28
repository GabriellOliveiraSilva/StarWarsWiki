import React from "react";
import { Text } from "react-native";
import { StylesCustomText } from "./StylesCustomText";

export const CustomText = ({ text, color, font, size, ml, mt, mb, mr, ta }) => {
  return (
    <StylesCustomText
      font={font}
      color={color}
      size={size}
      ml={ml}
      mt={mt}
      mb={mb}
      mr={mr}
      ta={ta}
    >
      {text}
    </StylesCustomText>
  );
};
