import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodosScreen from "./screens/TodosScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TodoScreen from "./screens/TodoScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name == "Home") iconName = "home";

          if (route.name == "Todos") iconName = "task";

          return (
            <MaterialIcons
              name={iconName}
              size={24}
              color={focused ? "#03a9f4" : "black"}
            />
          );
        },
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Todos" component={TodosScreen} />
    </Tab.Navigator>
  );
};
const MainStck = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="todo"
        component={TodoScreen}
        options={({ route }) => ({
          title: route.params.title,
          // presentation: "modal",
        })}
      />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStck />
      </NavigationContainer>
    </Provider>
  );
}
