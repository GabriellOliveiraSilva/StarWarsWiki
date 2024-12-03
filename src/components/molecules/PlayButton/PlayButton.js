import { StylesPlayButton } from "./StylesPlayButton";
import {CustomText} from '../../atoms/Text/CustomText'
import { Ionicons } from "@expo/vector-icons";
import {theme} from '../../../styles/theme'

export const PlayButton = ({iconName, onPress, text}) =>{
    return (
        <StylesPlayButton onPress={onPress}>
            <Ionicons name={iconName} size={theme.metrics.px(12)} color={theme.colors.black}></Ionicons>
            <CustomText text={text} font={'normal_text'} size={14} color={theme.colors.black}>

            </CustomText>
        </StylesPlayButton>
    )
}