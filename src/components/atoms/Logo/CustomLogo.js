import React from "react";
import { Image } from "react-native";


export const CustomLogo = ({source})=>
{
    return(
        <Image
        source={source}
        style={styles.logo}
        ></Image>
    )
}

const styles = {
    logo:{
        height: 64,
        width: 64
      },
}