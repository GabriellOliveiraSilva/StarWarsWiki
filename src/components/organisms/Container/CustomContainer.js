import React from "react";
import {StylesCustomContainer} from './StylesCustomContainer'

// Componente Container que recebe children
export const CustomContainer = ({ children }) => {
    return (
        <StylesCustomContainer>
            {children}
        </StylesCustomContainer>
    );
}

