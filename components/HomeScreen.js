import React, { useState } from "react";
import { StyleSheet, Text, View , FlatList, Button} from 'react-native';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { fruitsApi } from "../apis/giphy";
import { useQuery } from '@tanstack/react-query';


export default function HomeScreen(){
  const { isLoading, isError, data, error} = useQuery(['fruits'], fruitsApi)

  let fruits
  if(data){
    fruits = data;
  }
  
  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>An error has occurred: {error}</Text>
  
  return(
      <SafeAreaView style={styles.container}>
          <View style={styles.view} contentContainerStyle={{flexGrow:1}}>
            <FlatList
            data={fruits}
            renderItem={({item}) => <Link to={{ screen: 'FruitScreen', params: { id: item.id } }} style={styles.button}>
            <Text style={styles.text}>{item.name}</Text>
            </Link>}
          />
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  view:{
    width:'100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#fac881',
    marginBottom:10,
    width:'90%',
    marginLeft:'5%',
    marginRight:'5%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});