//Responsividade
//Estou pegando a dimensão da Tela
import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window"); //Pega o tamnho do height e width

const figmaWidth = 375;

//Pego o valor do elemento e então divido pelo tamanho da tela, para que assim eu consiga gerar o percentual
const px = (valuePx) => {
  const widthPercent = (valuePx / figmaWidth) * 100;
  //Arredonda para o pixel mais próximo
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  );

  return screenPixel
};

export const metrics = {
  px,
}