import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { CustomContainerScroll } from "../../components/atoms/ContainerScroll/CustomContainerScroll";

import { CategoriesList } from "../../components/organisms/CategoriesList/CategoriesList";
export const All = () => {
  return (
    <CustomContainer align={"center"} justify={"center"}>
      <CategoriesList></CategoriesList>
    </CustomContainer>
  );
};
