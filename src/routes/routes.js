//Libs de rotas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Telas
import { SplashScreen } from "../screens/SplashScreen/SplashScreen";
import { Home } from "../screens/Home/Home";
import { Detail } from "../screens/Detail/Detail";

//Cria a rota para navegar sob as telas
export const Routes = () => {
    //Inicializa a rota
    const Stack = createNativeStackNavigator();

    //Define o que vai ser acessado pelas rotas
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                {/* Definição das telas dentro do Stack.Navigator */}
                <Stack.Screen  component={SplashScreen} name="Splash" />
                <Stack.Screen component={Home} name="Home" />
                <Stack.Screen component={Detail} name="Detail" />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
