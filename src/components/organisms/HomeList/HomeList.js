import { FlatList } from "react-native";
import { CustomText } from "../../atoms/Text/CustomText";
import { Card } from "../../molecules/Card/Card";
import { StylesHomeList } from "./StylesHomeList";



export const HomeList = ({text, data, type, mt,mb,ml,mr,ph}) => {
    return (
        <StylesHomeList mt={mt} ml={ml} mb={mb} mr={mr} ph={ph}>
            <CustomText text={text} font={'subtitle'} ml={5} size={14}></CustomText>
            <FlatList
            horizontal
            // Dados
            data={data.data}
            // Como se fosse um map, dizendo que vai ser gerado
            renderItem={({ item }) => <Card item={item} type={type}/>}
            // Key do item
            keyExtractor={(item) => item._id.toString()}  // Usar toString() para garantir que seja uma string
            />

        </StylesHomeList>
    )
}