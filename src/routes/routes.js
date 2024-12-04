//Libs de rotas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//NavBar
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Telas
import { SplashScreen } from "../screens/SplashScreen/SplashScreen";
import { Home } from "../screens/Home/Home";
import { Detail } from "../screens/Detail/Detail";
import { Favorites } from "../screens/Favorites/Favorites";
import { Search } from "../screens/Search/Search";
import { theme } from "../styles/theme";
import { Ionicons } from '@expo/vector-icons';


const BottomRoute = () => {
  //Cria a barra de navegação
  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.white,
        
        tabBarStyle: { backgroundColor: theme.colors.black, marginBottom: 0, padding: 0, borderTopWidth: 0,},
        tabBarIcon: ({focused, color, size})=>{

            let iconName
            switch (route.name) {
                case "Home":
                    iconName = focused ? 'home' : 'home-outline'
                    break;
                case "Favorites":
                    iconName = focused ? 'heart-circle': 'heart-circle-outline'
                    break;
                case "Search":
                    iconName = focused ? 'search-circle': 'search-circle-outline'
                    break;
                default:
                    break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
            
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

//Cria a rota para navegar sob as telas
export const Routes = () => {
  //Inicializa a rota
  const Stack = createNativeStackNavigator();

  //Define o que vai ser acessado pelas rotas
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Definição das telas dentro do Stack.Navigator */}
        <Stack.Screen component={SplashScreen} name="Splash" />
        <Stack.Screen component={BottomRoute} name="Home" />
        <Stack.Screen component={Detail} name="Detail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
