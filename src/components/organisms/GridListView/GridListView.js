import { useState, useEffect } from "react";
import { useDataStore } from "../../../services/stores/dataStore";
import { CustomText } from "../../atoms/Text/CustomText";
import { apiService } from "../../../services/hooks/apiService";
import { CustomContainer } from "../../atoms/Container/CustomContainer";
import { StylesGridListView } from "./StylesGridListView";
import { Card } from "../../molecules/Card/Card";
import { ActivityIndicator } from "react-native";

export const GridListView = () => {
  const { selectedCategorie } = useDataStore();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCategorie || !selectedCategorie.item) return; // Verifica se a categoria está definida

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        // Passando a categoria como parâmetro para o serviço
        console.log(selectedCategorie.item.value);
        const response = await apiService(selectedCategorie.item.value, page);
        console.log(response);

        // Adicionando os novos itens aos anteriores
        setData((prevData) => [...prevData, ...(response.data || [])]);
        setPage(parseInt(response.info.page));
      } catch (err) {
        setError(err.message); // Armazenando o erro
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedCategorie, page]); // O useEffect só será disparado quando selectedCategorie mudar

  const handleEndReached = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  if (loading && page === 1) return <CustomText text="Carregando..." />;
  if (error) return <CustomText text={`Erro: ${error}`} />;

  return (
    <CustomContainer>
      <CustomContainer h={40} bg={"red"} p={10}>
        <CustomText
          font={"title"}
          text={selectedCategorie.item.value}
          color={"light"}
        ></CustomText>
      </CustomContainer>

      <CustomContainer>
        <StylesGridListView
          data={data}
          renderItem={({ item, index }) => (
            <CustomContainer w={"150"} p={10} dir={"row"}>
              <Card item={item} type="categoriesAll" />
            </CustomContainer>
          )}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          onEndReachedThreshold={0.9} // O valor pode ser ajustado conforme necessário
          onEndReached={handleEndReached}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#0000ff" /> : null // Exibe o indicador de carregamento
          }
        />
      </CustomContainer>
    </CustomContainer>
  );
};
