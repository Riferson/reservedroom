import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";



const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
