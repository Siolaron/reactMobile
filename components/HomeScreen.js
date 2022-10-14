import React, { useState } from "react";
import { Image, StyleSheet, Text, ScrollView , FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import fruitsApi from "../apis/giphy";
import { useQuery } from '@tanstack/react-query';


export default function HomeScreen(){
  const { isLoading, isError, data, error} = useQuery(['fruits'], fruitsApi)

  let fruits
  if(data){
    fruits = data;
  }
  
  
  return(
    <ScrollView contentContainerStyle={{flexGrow:1}}>
        <SafeAreaView style={styles.container}>
        <FlatList
        data={fruits}
        renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
      />
        </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color:'pink',
  },
  img:{
    width:300,
    height:300,
  },
});