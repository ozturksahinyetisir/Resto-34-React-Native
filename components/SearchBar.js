import { StyleSheet, Text, View,TextInput} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

export default function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
    <Ionicons style={styles.iconStyle} name="ios-search-circle" size={24} color="black" />
    <TextInput style={styles.textInput} 
    autoCorrect={false} 
    placeholder='Ara' 
    autoCapitalize='none'
    value={term}
    onChangeText={onTermChange}
    onEndEditing={onTermSubmit}/>
   </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor:'rgba(204,114,69,.28)',
    flexDirection:'row',
    margin:10,
    height:50,
    alignItems:'center',
    borderRadius:20,

  },
  iconStyle:{
    position:'absolute',
    marginHorizontal:5,
    fontSize:35,
    right:5,
  },
  textInput:{
    fontSize:14,
    marginStart:15,
  }

})