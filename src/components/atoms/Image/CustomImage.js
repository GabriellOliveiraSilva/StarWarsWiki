import React from "react";
import { Image } from "react-native";
import { StylesCustomImage } from "./StylesCustomImage";

export const CustomImage = ({ source, width, height, mt }) => {
  const isRemote = typeof source === "string" && source.startsWith("http");
  return (
    <StylesCustomImage
      source={isRemote ? { uri: source } : source}
      width={width}
      height={height}
      mt={mt}
    ></StylesCustomImage>
  );
};
