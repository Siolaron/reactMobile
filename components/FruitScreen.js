import React from "react";
import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { fruitApiID } from "../apis/giphy";
import { useQuery } from '@tanstack/react-query';
import  theme  from '../themes/default.ts';


export default function FruitScreen(){

  useFocusEffect(()=>{
    StatusBar.setBackgroundColor("#fec3a6")
  });

  const route = useRoute();
  const { isLoading, isError, data, error} = useQuery({queryFn: () => fruitApiID(route.params.id), queryKey: ['fruit', route.params.id]})

  let fruit
  if(data){
    fruit = data;
  }

  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>An error has occurred: {error}</Text>

  return(
    <ScrollView contentContainerStyle={{flexGrow:1}}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.titre}>{fruit.name}</Text>
          <Text style={styles.family}>{fruit.family}</Text>
          <Text>Apport énergétiques (pour 100g)</Text>
          {Object.keys(fruit.nutritions).map((key)=> <Text key={key}>{key}: {fruit.nutritions[key]}</Text>)}
        </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor:theme.colors.salmon,
  },
  titre: {
    color: theme.colors.black,
    fontSize: theme.fontSize.xl5,
    fontWeight: theme.fontWeight.bold,
    letterSpacing: theme.spacing.tiny,
    width:'100%',
    textAlign: theme.align.center,
    borderBottomWidth: 0.25,
    borderRadius:2,
    borderBottomColor: theme.colors.black,
  },
  family:{
    textAlign: 'center',
  }
});