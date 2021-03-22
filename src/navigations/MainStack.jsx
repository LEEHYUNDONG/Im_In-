import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "styled-components/native";
import MainTab from "./MainTab";
import { Login, Signup, Home, Check } from "../screens/index";
import { Button } from "react-native";
import { NavigationEvents } from "react-navigation";

const Stack = createStackNavigator();

const MainStack = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: theme.headerTintColor,
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerBackTitleVisible: true
      }}
      component={MainTab}>
      <Stack.Screen
        name="Home"
        component={(Home, MainTab)}
        screenOptions={{
          headerBackTitleVisible: false
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
