import { StylesCard, StylesCardImage } from "./StylesCard";
import { CustomText } from "../../atoms/Text/CustomText";
import { CustomContainer} from '../../atoms/Container/CustomContainer'
export const Card = ({item, type}) =>{
    if(type==='char'){
        return( 
            <CustomContainer align={'center'} w={96}>
            <StylesCard>
                <StylesCardImage source={{uri: item.image}}>
                </StylesCardImage>
            </StylesCard>
            <CustomText text={item.name} size={8}/> 
            <CustomText text={item.aka} size={10}/> 
            </CustomContainer>
        )
    }
    else{
        return( 
            <CustomContainer align={'center'} w={96}>
            <StylesCard>
                <StylesCardImage source={{uri: item.thumb}}>
                </StylesCardImage>
            </StylesCard>
            <CustomText text={item.title} size={8}/> 
            </CustomContainer>
        )
    }

}