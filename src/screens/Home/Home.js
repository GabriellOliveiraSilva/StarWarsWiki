import { useEffect, useState } from "react";
import { HomeList } from "../../components/organisms/HomeList/HomeList";
import { CustomContainerScroll } from "../../components/atoms/ContainerScroll/CustomContainerScroll";
import { CustomContainer } from "../../components/atoms/Container/CustomContainer";
import { Hero } from "../../components/organisms/Hero/Hero";
import { Loading } from "../../components/organisms/Loading/Loading";
import Char from "../../services/hooks/Char";
import Organization from "../../services/hooks/Organization";

export const Home = () => {
  const [dataChar, setDataChar] = useState([]);
  const [dataOrganizatiom, setDataOrganization] = useState([]);
  const [loading, setLoading] = useState(true);

  const DATA_CHAR = async () => {
    try {
      console.log("Fetching character data...");
      const data = await Char.getAllCharWithLimit(1, 10);
      console.log("Character data:", data);
      return data;
    } catch (error) {
      console.log("Error fetching character data", error);
      return [];
    }
  };

  const DATA_ORGANIZATION = async () => {
    try {
      console.log("Fetching organization data...");
      const data = await Organization.getOrganizationWithLimit(1, 10);
      console.log("Organization data:", data);
      return data;
    } catch (error) {
      console.log("Error fetching organization data", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      const charData = await DATA_CHAR();
      setDataChar(charData);

      const organizationData = await DATA_ORGANIZATION();
      setDataOrganization(organizationData);

      setLoading(false); // Atualiza o estado de loading
    };

    fetchData();
  }, []);

  if (loading) {
    return (
          <Loading />
    );
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

        <HomeList
          text={"Organizações"}
          data={dataOrganizatiom}
          ph={10}
          mt={10}
          type={"char"}
        ></HomeList>
      </CustomContainer>
    </CustomContainerScroll>
  );
};
