import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity} from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const DrawerStyle = (props) => {
  
  const navigation = useNavigation();

  return (
    
    

    <View style ={{flex: 1}}> 
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{marginBottom:25, marginLeft:12}}>
        <TouchableOpacity onPress={( ) => { 
          navigation.navigate("Login")
        }}>
        <SimpleLineIcons name="logout" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default DrawerStyle;