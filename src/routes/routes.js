// Importações
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importações de telas
import { SplashScreen } from "../screens/SplashScreen/SplashScreen";
import { Home } from "../screens/Home/Home";
import { Detail } from "../screens/Detail/Detail";
import { Favorites } from "../screens/Favorites/Favorites";
import { Search } from "../screens/Search/Search";
import { Categories } from "../screens/Categories/Categories";
import { All } from "../screens/All/All";
import { theme } from "../styles/theme";

// Importações de ícones
import { Ionicons } from "@expo/vector-icons";

// Criado um Stack interno para Categories e suas subtelas
const CategoriesStack = createNativeStackNavigator();

const CategoriesRoutes = () => {
  return (
    <CategoriesStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tela principal de Categories */}
      <CategoriesStack.Screen name="Categories" component={Categories} />
      {/* Tela "All" como subtela de Categories */}
      <CategoriesStack.Screen name="All" component={All} />
    </CategoriesStack.Navigator>
  );
};

// Barra de navegação inferior (BottomTabNavigator)
const BottomRoute = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          marginBottom: 0,
          padding: 0,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Favorites":
              iconName = focused ? "heart-circle" : "heart-circle-outline";
              break;
            case "Search":
              iconName = focused ? "search-circle" : "search-circle-outline";
              break;
            case "Categories":
              iconName = focused ? "albums" : "albums-outline";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      {/* Substituído Categories por CategoriesRoutes */}
      <Tab.Screen name="Categories" component={CategoriesRoutes} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

// Criação das rotas principais
export const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Rota inicial */}
        <Stack.Screen component={SplashScreen} name="Splash" />
        {/* Tela Home com a Bottom Tab Navigator */}
        <Stack.Screen component={BottomRoute} name="Home" />
        {/* Tela Detail sem a Bottom Tab Navigator */}
        <Stack.Screen
          component={Detail}
          name="Detail"
          options={{
            tabBarStyle: { display: "none" }, // Oculta a navbar para a tela Detail
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
