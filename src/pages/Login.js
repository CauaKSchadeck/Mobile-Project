import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Login() {
  const Navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>SEU EMAIL</Text>
      <TextInput style={{borderWidth:1, borderRadius:6, height:59, width:250}} placeholder="Email"></TextInput>

      <Text>SUA SENHA</Text>
      <TextInput style={{borderWidth:1, borderRadius:6, height:59, width:250}} placeholder="Senha"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Login;
