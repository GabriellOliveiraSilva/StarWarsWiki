import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StylesIconBack } from "./StylesIconBack";
import {theme} from '../../../styles/theme'

export const IconBack = ()=>{
    return(

            <Ionicons name="arrow-back-circle-outline" size={theme.metrics.px(24)} color={theme.colors.white}>

            </Ionicons>

    )
}