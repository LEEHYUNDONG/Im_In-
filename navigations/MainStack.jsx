import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTab from "./MainTab";
import TabBarIcon from "./MainTab";
//import { Home, Check, Mode, List, Settings } from "../screens";
//import theme from "../src/theme";
//import { ThemeContext } from "styled-components";

const Stack = createStackNavigator();

const MainStack = () => {
  //const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#000000",
        cardStyle: { backgroundColor: "#ffffff" },
        headerBackTitleVisible: false
      }}>
      <Stack.Screen name="Main" component={MainTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
