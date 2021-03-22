import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.backgroundColor }
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: "Login",
          headerBackTitleVisible: true,
          headerBackTitle: "Login",
          headerTitleStyle: { fontSize: 24 },
          headerTintColor: "#000000",
          headerBackImage: ({ tintColor }) => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === "ios" ? 11 : 0
            };
            return (
              <MaterialIcons
                name="login"
                size={30}
                color={tintColor}
                style={style}
              />
            );
          }
        }}
      />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
