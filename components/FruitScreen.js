import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { fruitID } from '../apis/fruitApi';
import { useQuery } from '@tanstack/react-query';
import  theme  from '../themes/default.ts';


export default function FruitScreen(){

  useFocusEffect(()=>{
    StatusBar.setBackgroundColor(theme.colors.salmon)
  });

  const route = useRoute();
  const { isLoading, isError, data, error} = useQuery({queryFn: () => fruitID(route.params.id), queryKey: ['fruit', route.params.id]})

  let fruit
  if(data){
    fruit = data;
  }

  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>An error has occurred: {error}</Text>

  return(
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{fruit.name}</Text>
      <Text style={styles.family}>{fruit.family}</Text>
      <Text style={styles.apport}>Apport énergétiques (pour 100g) :</Text>
      {Object.keys(fruit.nutritions).map((key)=> <Text style={styles.nutritions} key={key}><Text style={styles.name}>{key}:</Text><Text style={styles.number}>{fruit.nutritions[key]} g</Text></Text>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor:theme.colors.white,
  },
  title: {
    color: theme.colors.black,
    fontSize: theme.fontSize.xl5,
    fontWeight: theme.fontWeight.bold,
    letterSpacing: theme.spacing.tiny,
    width:'100%',
    textAlign: theme.align.center,
    borderTopWidth: 0.5,
    borderTopColor: theme.colors.black,
    backgroundColor:theme.colors.salmon,
  },
  family:{
    textAlign: 'center',
    marginBottom: theme.spacing.base,
    borderBottomWidth: 0.25,
    borderBottomColor: theme.colors.black,
    backgroundColor:theme.colors.salmon,
  }, 
  apport:{
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.medium,
    marginLeft: theme.spacing.demi,
    marginBottom: theme.spacing.demi,
  },
  nutritions:{
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.normal,
    marginLeft: theme.spacing.demi,
  },
  name: {
    textTransform: 'capitalize',
  },
  number:{
  }
});