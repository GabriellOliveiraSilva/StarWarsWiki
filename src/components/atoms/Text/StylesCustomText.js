import styled from 'styled-components/native'
import {Text} from 'react-native'

export const StylesCustomText = styled(Text)`
    font-weight: 700;
    font-size: ${({size, theme}) => size ? theme.metrics.px(size):theme.metrics.px(20) };
    padding-top: 10;
    color: ${({color, theme}) => color ? theme.colors[color] : 'white'};
    font-family: ${({font, theme}) => font === 'title' ? theme.fonts.title : font === 'subtitle' ? theme.fonts.subtitle : theme.fonts.normal_text  };
    margin-top: ${({mt, theme}) => theme.metrics.px(mt || 0)} ;
    margin-left: ${({ml, theme}) => theme.metrics.px(ml || 0)} ;
    margin-right: ${({mr, theme}) => theme.metrics.px(mr || 0)} ;
    margin-bottom: ${({mb, theme}) => theme.metrics.px(mb || 0)} ;


`;

                