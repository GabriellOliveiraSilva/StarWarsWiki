import { SplashScreen } from "./src/screens";
import { useFonts, RubikMonoOne_400Regular } from "@expo-google-fonts/rubik-mono-one";
import {MontserratAlternates_400Regular, MontserratAlternates_300Light} from '@expo-google-fonts/montserrat-alternates'
//Para que eu não tenha que ficar importando o theme em todos os arquivos, posso configurar um provedor global de thema
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/";
import AppLoading from "expo-app-loading";


export default function App(){
  let [fontLoaded] = useFonts({
    RubikMonoOne_400Regular,
    MontserratAlternates_300Light,
    MontserratAlternates_400Regular

  })

  //Veririfico se a fonte esta carregada
  if(!fontLoaded){
    return <AppLoading></AppLoading>
  }
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen></SplashScreen>
    </ThemeProvider>
  )
}