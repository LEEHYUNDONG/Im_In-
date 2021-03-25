import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "styled-components/native";
import MainTab from "./MainTab";
import MaterialIcons from '@expo/vector-icons';
import { Login, Signup, Home, Check } from "../screens/index";
import { Button } from "react-native";
import { NavigationEvents } from "react-navigation";
import {ScreenStackHeaderRightView} from "react-native-screens";
import MainHeader from "./MainHeader";
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const MainStack = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      component={MainTab}
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: theme.headerTintColor,
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerBackTitleVisible: false,
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Home"
        component={(MainTab)}
        screenOptions={{
          headerBackTitleVisible: true
        }}
      />

    </Stack.Navigator>
  );
};

export default MainStack;
