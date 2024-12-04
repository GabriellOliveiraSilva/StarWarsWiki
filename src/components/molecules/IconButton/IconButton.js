import { StylesIconButton } from "./StylesIconButton";
import {CustomText} from '../../atoms/Text/CustomText'
import { Ionicons } from "@expo/vector-icons";
import {theme} from '../../../styles/theme'


export const IconButton = ({iconName, onPress, text, align}) =>{
    return(
        <StylesIconButton align={align}>
            <Ionicons name={iconName}  size={theme.metrics.px(24)} color={theme.colors.white}>
            </Ionicons>
           { text && <CustomText text={text} font={'normal_text'} size={10} mt={6}/>}


        </StylesIconButton>
    )
}