import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

export default function ResultsList({title,results}) {
    const navigation=useNavigation()
    console.log(results);
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      
      
      <FlatList
      contentContainerStyle={{ paddingBottom: 25 }}
      showsHorizontalScrollIndicator ={false}
      horizontal 
      
      data={results}
      renderItem={({item})=>{

      return(
      <TouchableOpacity onPress={()=>
        navigation.navigate("ResultShow",{id:item.id})}>
        <ResultDetail result={item}/>
      </TouchableOpacity>
    )
    }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'Oswald',
    margin:3,
    marginHorizontal:10,

  }
})