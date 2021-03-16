import React, { useContext } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Check, Mode, List, Settings } from "../screens";

//import { ThemeContext } from "styled-components/native";

const Tab = createBottomTabNavigator();

export const TabBarIcon = (focused, name) => {
  let iconImagePath;
  if (name === "Home") {
    iconImagePath = require("../assets/icon/home.png");
  } else if (name === "Check") {
    iconImagePath = require("../assets/icon/check1.png");
  } else if (name === "Mode") {
    iconImagePath = require("../assets/icon/check2.png");
  } else if (name === "List") {
    iconImagePath = require("../assets/icon/list.png");
  } else if (name === "Settings") {
    iconImagePath = require("../assets/icon/setting.png");
  }
  return (
    <Image
      style={{
        width: focused ? 32 : 30,
        height: focused ? 32 : 30
      }}
      source={iconImagePath}
    />
  );
};
const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelPosition: "below-icon"
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name)
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Check" component={Check} />
      <Tab.Screen name="Mode" component={Mode} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainTab;
