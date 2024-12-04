import { Card } from "../../components/molecules/Card/Card";
import { HomeList } from "../../components/organisms/HomeList/HomeList";
import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { CustomText } from "../../components/atoms/Text/CustomText";
import { Hero } from "../../components/organisms/Hero/Hero";
import { ScrollView } from "react-native";
import { CustomContainerScroll} from "../../components/atoms/ContainerScroll/CustomContainerScroll";
import { useDataStore } from "../../services/stores/dataStore";



export const Detail = ({}) =>{
  const {selectedData} = useDataStore()

  

    return(

      <CustomContainerScroll>
          <CustomContainer justify="center" align="start">
            <Hero item={selectedData} type={'detail'}></Hero>
        </CustomContainer>
      </CustomContainerScroll>

    )
}