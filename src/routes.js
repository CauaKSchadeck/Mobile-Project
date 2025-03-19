import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Login from './pages/Login';
import Home from './pages/Home';
import Math from "./pages/Math";

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Login'>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Matematica" component={Math} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}