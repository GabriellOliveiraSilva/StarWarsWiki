import { Card } from "../../components/molecules/Card/Card";
import { HomeList } from "../../components/organisms/HomeList/HomeList";
import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { CustomText } from "../../components/atoms/Text/CustomText";
import { Hero } from "../../components/organisms/Hero/Hero";

export const Home = () =>{
    return(
        <CustomContainer justify="center" align="center">
            <Hero></Hero>
            <HomeList></HomeList>
        </CustomContainer>
    )
}