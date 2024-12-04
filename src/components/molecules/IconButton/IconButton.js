import { StylesIconButton } from "./StylesIconButton";
import { CustomText } from "../../atoms/Text/CustomText";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import AppFunctions from "../../../services/functions/IconFunctions";

export const IconButton = ({ iconName, onPress, text, align, action }) => {
  const navigation = useNavigation();

  const appFunction = (action) => {
    switch (action) {
      case "return": // Substitua "someValue" pelo valor que você espera comparar
        AppFunctions.Return(navigation);
        break;

      default:
        console.log("Ação Desconhecida");
        break;   
    }
  };

  return (
    <StylesIconButton align={align} onPress={() => appFunction(action)}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      ></Ionicons>
      {text && <CustomText text={text} font={"normal_text"} size={10} mt={6} />}
    </StylesIconButton>
  );
};
