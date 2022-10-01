import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Details from "./screens/Details";
import Home from "./screens/Home";

const Statck = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {

  return (
    <NavigationContainer theme={theme}>
      <Statck.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Statck.Screen name="Home" component={Home} />
        <Statck.Screen name="Details" component={Details} />
      </Statck.Navigator>
    </NavigationContainer>
  );
}
