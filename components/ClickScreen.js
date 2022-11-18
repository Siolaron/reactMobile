import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, ScrollView , TouchableOpacity,StatusBar} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClickScreen(){
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  useFocusEffect(()=>{
    StatusBar.setBackgroundColor("#000");
  });
  
    return(
    <ScrollView contentContainerStyle={{flexGrow:1}}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Nombre: {count}</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Appuie ICI</Text>
          </TouchableOpacity>
        </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'pink',
  },
  text: {
    color:'pink',
  },
  img:{
    width:300,
    height:300,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});