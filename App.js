//Importação das fontes
import {
  useFonts,
  RubikMonoOne_400Regular,
} from "@expo-google-fonts/rubik-mono-one";
import {
  MontserratAlternates_400Regular,
  MontserratAlternates_300Light,
  MontserratAlternates_200ExtraLight,
} from "@expo-google-fonts/montserrat-alternates";
//Para que eu não tenha que ficar importando o theme em todos os arquivos, posso configurar um provedor global de thema
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/";
//Para Loading
import AppLoading from "expo-app-loading";
//Import as rotas
import { Routes } from "./src/routes/routes";

export default function App() {
  //Defino quais fontes serão usadas
  let [fontLoaded] = useFonts({
    RubikMonoOne_400Regular,
    MontserratAlternates_300Light,
    MontserratAlternates_400Regular,
    MontserratAlternates_200ExtraLight,
  });

  //Veririfico se a fonte esta carregada
  if (!fontLoaded) {
    return <AppLoading></AppLoading>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes></Routes>
    </ThemeProvider>
  );
}
