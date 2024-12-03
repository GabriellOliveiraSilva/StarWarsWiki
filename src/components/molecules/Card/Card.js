import { StylesCard, StylesCardImage } from "./StylesCard";

export const Card = ({item}) =>{
    return( 
        <StylesCard>
            <StylesCardImage source={{uri: item.image_url}}>

            </StylesCardImage>
        </StylesCard>
    )
}