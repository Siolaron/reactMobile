import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, ScrollView , TouchableOpacity,StatusBar} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../themes/default";

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
    backgroundColor: theme.colors.black,
    alignItems: theme.align.center,
    justifyContent: theme.align.center,
    color: theme.colors.pink,
  },
  text: {
    color: theme.colors.pink,
  },
  img:{
    width: theme.img.mdLg,
    height: theme.img.mdLg,
  },
  button: {
    alignItems: theme.align.center,
    backgroundColor: theme.colors.pink,
    padding: theme.spacing.demiLG
  },
});