import { StylesLoading } from "./StylesLoading";
import { CustomText } from "../../atoms/Text/CustomText";
import { CustomImage } from "../../atoms/Image/CustomImage";
import { CustomContainer } from "../../atoms/Container/CustomContainer";
import LoadingGif from '../../../../assets/loading.gif'

export const Loading = () =>{
    return(
      <StylesLoading>

<CustomContainer align='center' justify='center'>
            <CustomImage source={LoadingGif} width={300} height={300}></CustomImage>
            <CustomText text={'R2D2 está buscando informações...'} size={10} font={'title'}></CustomText>
        </CustomContainer>
      </StylesLoading>
    )
}