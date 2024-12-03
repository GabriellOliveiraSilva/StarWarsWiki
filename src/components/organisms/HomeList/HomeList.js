import { FlatList } from "react-native";
import { CustomText } from "../../atoms/Text/CustomText";
import { Card } from "../../molecules/Card/Card";

const FAKE_DATA = [
    {
        id: 0,
        image_url: 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=213%2C0%2C854%2C854',
        name: 'Anakin Skywalker',
        aka: 'Darth Vader'
    },
    {
        id: 1,
        image_url: 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
        name: 'Luke Skywalker',
        aka: 'The Choiced'
    },

]

export const HomeList = () => {
    return (
        <FlatList
            horizontal
            // Dados
            data={FAKE_DATA}
            // Como se fosse um map, dizendo que vai ser gerado
            renderItem={({ item }) => <Card item={item} />}
            // Key do item
            keyExtractor={(item) => item.id.toString()}  // Usar toString() para garantir que seja uma string
        />
    )
}