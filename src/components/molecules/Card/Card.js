import { StylesCard, StylesCardImage } from "./StylesCard";
import { CustomText } from "../../atoms/Text/CustomText";

export const Card = ({item}) =>{
    return( 
        <StylesCard>
            <StylesCardImage source={{uri: item.image_url}}>
            </StylesCardImage>
        </StylesCard>
    )
}