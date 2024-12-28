import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { CustomContainerScroll } from "../../components/atoms/ContainerScroll/CustomContainerScroll";
import { SafeAreaView } from "react-native";
import { theme } from "../../styles/theme";
import { CategoriesList } from "../../components/organisms/CategoriesList/CategoriesList";
export const Categories = () => {
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.dark }}>
      <CustomContainer align={"center"} justify={"center"}>
        <CategoriesList></CategoriesList>
      </CustomContainer>
    </SafeAreaView>
  );
};
