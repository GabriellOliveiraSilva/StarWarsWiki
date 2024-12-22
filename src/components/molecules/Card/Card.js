import {
  StylesCard,
  StylesCardImage,
  StylesCardCategories,
} from "./StylesCard";
import { CustomText } from "../../atoms/Text/CustomText";
import { CustomContainer } from "../../atoms/Container/CustomContainer";
import { useNavigation } from "@react-navigation/native";
import { useDataStore } from "../../../services/stores/dataStore";
import { useEffect, useState } from "react";
import { CustomImage } from "../../atoms/Image/CustomImage";

export const Card = ({ item, type }) => {
  const [typeOfObj, setTypeOfObj] = useState(null);
  const navigation = useNavigation();

  const { setSelectedData, setSelectedCategorie } = useDataStore();
  const onSelectItem = () => {
    switch (type) {
      case "char":
        setSelectedData({ item: item, type: typeOfObj });
        navigation.navigate("Detail");
        break;
      case "categories":
        console.log("acionado");
        setSelectedCategorie({ item: item, type: typeOfObj });
        navigation.navigate("All");
        break;
      default:
        console.log("nada");
    }
  };

  useEffect(() => {
    switch (type) {
      case "char":
        setTypeOfObj("Personagem");
        break;
      case "categories":
        setTypeOfObj("Categorias");
      default:
        break;
    }
  });

  switch (type) {
    case "char":
      return (
        <CustomContainer align={"center"} w={96}>
          <StylesCard onPress={() => onSelectItem()}>
            <StylesCardImage source={{ uri: item.image }}></StylesCardImage>
          </StylesCard>
          <CustomText text={item.name} size={8} />
        </CustomContainer>
      );
      break;

    case "categories":
      return (
        <CustomContainer align={"center"} justify={"center"}>
          <StylesCardCategories onPress={() => onSelectItem()}>
            <CustomText text={item.value}></CustomText>
            <CustomImage source={item.icon}></CustomImage>
          </StylesCardCategories>
        </CustomContainer>
      );
      break;

    default:
      return (
        <CustomContainer align={"center"} w={96}>
          <StylesCard onPress={() => onSelectItem()}>
            <StylesCardImage source={{ uri: item.thumb }}></StylesCardImage>
          </StylesCard>
          <CustomText text={item.title} size={8} />
        </CustomContainer>
      );
  }
};
