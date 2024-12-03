import {CustomText} from '../../atoms/Text/CustomText'
import { StylesTag } from './StylesTag'


export const Tag = ({text, mt, ml, mr, mb}) =>(
    <StylesTag  mt={mt} ml={ml} mr={mr} mb={mb}>
        <CustomText text={text} size={12}>
        </CustomText>
    </StylesTag>
)