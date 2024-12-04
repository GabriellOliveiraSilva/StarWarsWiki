import { StylesCard, StylesCardImage } from "./StylesCard";
import { CustomText } from "../../atoms/Text/CustomText";
import { CustomContainer} from '../../atoms/Container/CustomContainer'
import { useNavigation } from "@react-navigation/native";
import { useDataStore } from "../../../services/stores/dataStore";

export const Card = ({item, type}) =>{
    const navigation = useNavigation()

    const {setSelectedData} = useDataStore()
    const onSelectItem = ()=>{

        setSelectedData(item)
        navigation.navigate('Detail')

    }

    if(type==='char'){
        return( 
            <CustomContainer align={'center'} w={96}>
            <StylesCard onPress={()=> onSelectItem()}>
                <StylesCardImage source={{uri: item.image}}>
                </StylesCardImage>
            </StylesCard>
            <CustomText text={item.name} size={8}/> 
            </CustomContainer>
        )
    }

    else{
        return( 
            <CustomContainer align={'center'} w={96}>
            <StylesCard onPress={()=> onSelectItem()}>
                <StylesCardImage  source={{uri: item.thumb}}>
                </StylesCardImage>
            </StylesCard>
            <CustomText text={item.title} size={8}/> 
            </CustomContainer>
        )
    }

}