import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddNewTask from "./addNewTask";
import HomeScreens from "../screens/HomeScreens";
import TodosScreen from "../screens/TodosScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ todos, inProgress, done }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        initialParams={{ todos, inProgress, done }}
      />
      <Tab.Screen name="todos" component={TodosScreen} />
    </Tab.Navigator>
  );
};
