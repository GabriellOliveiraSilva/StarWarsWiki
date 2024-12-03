import styled from "styled-components/native";
import { View } from "react-native-web";


export const StylesCustomContainer = styled(View)`

    flex: ${({flex} )=> flex || 1};
    justify-content: ${({justifyContent}) => justifyContent || 'center'};
    align-items: ${({alignItems}) => alignItems || 'center'};
    padding: ${({padding}) => padding || '16px'};
    background-color: ${({backgroundColor})=> backgroundColor || '#161616'};

`