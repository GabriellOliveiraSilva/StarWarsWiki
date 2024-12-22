import { Card } from "../../components/molecules/Card/Card";
import { HomeList } from "../../components/organisms/HomeList/HomeList";
import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { CustomText } from "../../components/atoms/Text/CustomText";
import { Hero } from "../../components/organisms/Hero/Hero";
import { ScrollView } from "react-native";
import { CustomContainerScroll } from "../../components/atoms/ContainerScroll/CustomContainerScroll";
import { useDataStore } from "../../services/stores/dataStore";
import { Description } from "../../components/organisms/Description/Description";

export const Detail = ({}) => {
  const { selectedData } = useDataStore();
  return (
    <CustomContainer>
      <CustomContainerScroll justify="center" align="center">
        <Hero
          item={selectedData.item}
          typeOfObj={selectedData.type}
          type={"detail"}
        ></Hero>
        <Description description={selectedData.item.description} />
      </CustomContainerScroll>
    </CustomContainer>
  );
};
