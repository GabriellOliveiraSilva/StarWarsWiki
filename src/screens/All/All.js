import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { CustomContainerScroll } from "../../components/atoms/ContainerScroll/CustomContainerScroll";
import { CustomText } from "../../components/atoms/Text/CustomText";
import { GridListView } from "../../components/organisms/GridListView/GridListView";
import { CategoriesList } from "../../components/organisms/CategoriesList/CategoriesList";
import { theme } from "../../styles/theme";
import { SafeAreaView } from "react-native";
export const All = ({}) => {
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.dark }}>
      <CustomContainer>
        <GridListView></GridListView>
      </CustomContainer>
    </SafeAreaView>
  );
};
