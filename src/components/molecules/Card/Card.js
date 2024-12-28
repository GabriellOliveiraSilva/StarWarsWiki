import {
  StylesCard,
  StylesCardImage,
  StylesCardCategories,
  StylesCardCategoriesAll,
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
        setSelectedCategorie({ item: item, type: typeOfObj });
        navigation.navigate("All");
        break;
      default:
    }
  };

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
        <CustomContainer align={"center"} justify={"center"} h={115}>
          <StylesCardCategories onPress={() => onSelectItem()}>
            <CustomText text={item.value}></CustomText>
            <CustomImage source={item.icon}></CustomImage>
          </StylesCardCategories>
        </CustomContainer>
      );
      break;

    case "categoriesAll":
      return (
        <CustomContainer>
          <StylesCardCategoriesAll
            onPress={() => onSelectItem((type = "char"))}
          >
            <CustomImage
              width={96}
              height={96}
              source={item.image}
            ></CustomImage>
            <CustomText text={item.name} size={15} ta={"center"}></CustomText>
          </StylesCardCategoriesAll>
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
