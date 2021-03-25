import React, { useContext } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import MainHeader from "./MainHeader";

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainHeader />
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
