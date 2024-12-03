import styled from 'styled-components/native'
import {Text} from 'react-native'

export const StylesCustomText = styled(Text)`
    font-weight: 700;
    font-size: 24px;
    padding-top: 10;
    color: ${({color, theme}) => color || theme.colors.red};
    font-family: ${({font, theme}) => font === 'title' ? theme.fonts.title : font === 'subtitle' ? theme.fonts.subtitle : theme.fonts.normal_text  };

`;

