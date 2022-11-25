import React, { useState } from "react";
import { StyleSheet, Text, View , FlatList, Button, RefreshControl, ScrollView, StatusBar} from 'react-native';
import { Link, useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { fruitsAll } from "../apis/fruitApi";
import { useQuery } from '@tanstack/react-query';
import theme from "../themes/default";

export default function HomeScreen(){
  useFocusEffect(()=>{
    StatusBar.setBackgroundColor(theme.colors.peach);
  });
  
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().then(setRefreshing(false))
  }, []);
  const { isLoading, isError, data, error, refetch, isRefetching} = useQuery(['fruits'], fruitsAll)

  let fruits
  if(data){
    fruits = data;
  }
  
  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>An error has occurred: {error}</Text>
  
  return(
      <View 
      style={styles.view} contentContainerStyle={{flexGrow:1}}
      >
        <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        data={fruits}
        renderItem={({item}) => <Link to={{ screen: 'FruitScreen', params: { id: item.id } }} style={styles.button}
        nestedScrollEnabled>
        <Text style={styles.text}>{item.name}</Text>
        </Link>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor: theme.colors.white,
    alignItems: theme.align.center,
  },
  view:{
    width:'100%',
  },
  button: {
    alignItems: theme.align.center,
    justifyContent: theme.align.center,
    textAlign:theme.align.center,
    paddingVertical: theme.spacing.demiXL,
    borderRadius: theme.radius.double,
    elevation: 3,
    backgroundColor: theme.colors.peach,
    marginTop: theme.spacing.demiLG,
    marginBottom: theme.spacing.demiLG,
    width:'90%',
    marginLeft:'5%',
    marginRight:'5%',
  },
  text: {
    fontSize: theme.fontSize.md,
    lineHeight: theme.lineHeight.md,
    fontWeight: theme.fontWeight.bold,
    letterSpacing: theme.spacing.tiny,
    color: theme.colors.white,
  },
});