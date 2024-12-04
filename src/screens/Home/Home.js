import { Card } from "../../components/molecules/Card/Card";
import { HomeList } from "../../components/organisms/HomeList/HomeList";
import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { CustomText } from "../../components/atoms/Text/CustomText";
import { Hero } from "../../components/organisms/Hero/Hero";
import { ScrollView } from "react-native";
import { CustomContainerScroll } from "../../components/atoms/ContainerScroll/CustomContainerScroll";
import { useEffect, useState } from "react";
import Char from "../../services/hooks/Char";

export const Home = ({}) => {
  // Effects para monitorar o estado dos elementos
  const [dataChar, setDataChar] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função que faz a chamada da API
  const DATA_CHAR = async () => {
    try {
      const data = await Char.getAllCharWithLimit(1, 10); // Aqui, passa os parâmetros fixos de página e limite
      return data;
    } catch (error) {
      console.log("Error fetching data", error);
      return [];
    }
  };

  // Monitora o estado caso tenha alguma alteração
  useEffect(() => {
    const fetchChar = async () => {
      const charData = await DATA_CHAR(); // Chama corretamente a função sem parâmetros
      setDataChar(charData);
      setLoading(false);
    };

    fetchChar();
  }, []); // O useEffect só será executado uma vez, quando o componente for montado

  if (loading) {
    return <CustomText text={"Carregando"} />;
  }
  return (
    <CustomContainerScroll>
      <CustomContainer justify="center" align="start">
        <Hero
          item={{
            image: "https://starwars-visualguide.com/assets/img/films/1.jpg",
          }}
        ></Hero>
        <HomeList
          text={"Personagens"}
          data={dataChar} 
          ph={10}
          mt={10}
          type={"char"}
        ></HomeList>
      </CustomContainer>
    </CustomContainerScroll>
  );
};
