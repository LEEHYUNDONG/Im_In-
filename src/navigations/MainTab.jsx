import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Check, Mode, List, Settings, Login } from "../screens/index";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelPosition: "below-icon",
        style: {
          backgroundColor: "#ffffff",
          borderTopColor: "#cfcfcf",
          borderTopWidth: 0.3
        },
        activeTintColor: "#000000",
        inactiveTintColor: "#cfcfcf"
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: props => {
          let name = "";
          if (route.name === "Home") name = "home-filled";
          else if (route.name === "Check") name = "account-circle";
          else if (route.name === "Mode") name = "supervisor-account";
          else if (route.name === "List") name = "list";
          else name = "settings";

          return TabIcon({ ...props, name });
        }
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerTitle: "Home"
        }}
      />
      <Tab.Screen
        name="Check"
        component={Check}
        options={{
          tabBarLabel: "Check",
          headerTitle: "Check"
        }}
      />
      <Tab.Screen
        name="Mode"
        component={Mode}
        options={{
          tabBarLabel: "Mode",
          headerTitle: "Mode"
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: "List",
          headerTitle: "List"
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          headerTitle: "Settings"
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
