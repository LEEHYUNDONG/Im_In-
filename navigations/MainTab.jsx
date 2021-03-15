import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Check, Mode, List, Settings } from "../screens";
//import { ThemeContext } from "styled-components/native";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Check" component={Check} />
      <Tab.Screen name="Mode" component={Mode} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainTab;
