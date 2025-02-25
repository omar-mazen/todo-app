import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import TodoList from "../components/TodoList";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();
const TodosScreen = () => {
  const [activeTab, setActiveTab] = useState("all");
  const todos = useSelector((store) => store.todos.todos);
  const inProgress = todos?.filter((todo) => todo?.status == "in-progress");
  const done = todos?.filter((todo) => todo?.status == "done");
  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {todos ? (
        <TodoList
          list={
            activeTab == "all"
              ? todos
              : activeTab == "in-progress"
              ? inProgress
              : done
          }
        />
      ) : (
        <Text>There is no todo yet</Text>
      )}
    </>
  );
};

export default TodosScreen;

/*
<Tab.Navigator
  screenOptions={{
    swipeEnabled: true,
    sceneContainerStyle: { flex: 1 },
  }}
>
  <Tab.Screen
    name="all"
    component={TodoList}
    initialParams={{ list: todos }}
  />
  <Tab.Screen
    name="in-progress"
    component={TodoList}
    initialParams={{ list: inProgress }}
  />
  <Tab.Screen
    name="done"
    component={TodoList}
    initialParams={{ list: done }}
  />
</Tab.Navigator>
*/
