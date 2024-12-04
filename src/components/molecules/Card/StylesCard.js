import styled from 'styled-components/native'

export const StylesCard = styled.TouchableOpacity`

    width: ${({theme}) =>theme.metrics.px(88)}px;
    height: ${({theme}) =>theme.metrics.px(128)}px;
    border-radius: ${({theme}) =>theme.metrics.px(8)}px;
    overflow: hidden;
    margin: ${({theme}) =>theme.metrics.px(12)}px ;

`

export const StylesCardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
`

