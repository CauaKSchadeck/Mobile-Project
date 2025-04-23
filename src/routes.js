import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerStyle from "./pages/DrawerStyle";

const Drawer = createDrawerNavigator();

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Clinic_List from "./pages/Clinic_List";


export function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName='Login'
        drawerContent={props => <DrawerStyle {...props} />}
      >
        <Drawer.Screen name="Login" component={Login} options={{drawerItemStyle: {display: "none"}, headerShown : false}}/>
        <Drawer.Screen name="Register" component={Register} options={{drawerItemStyle: {display: "none"}, headerShown : false}}/>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Lista de Clinicas" component={Clinic_List} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}