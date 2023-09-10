import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function ResultDetail({result}) {
 
  return (
    <View style={styles.background}>
    <View>
    <Image style={styles.image} source={result.image_url ? { uri:result.image_url } : null}/>
      <Text style={styles.head}>{result.name}</Text>
    </View>
    <View style={styles.backgroundStyle}>
    <AntDesign style={styles.iconStyle} name="staro" size={24} color="yellow" />
    <Text style={styles.starText}>{result.rating}</Text>
    <Text style={styles.text}>{result.review_count} Değerlendirme</Text>
   </View>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'rgba(204,114,69,.58)',
    margin:5,
    marginLeft:10,
    borderRadius:15,
  },
  image:{
    width:265,
    height:120,
    margin:3,
    borderRadius:15,
  },
  head:{
    width:265,
    height:55,
    fontSize:15,
    padding:9,
    fontWeight:'bold',
  },
  text:{
    fontFamily:'Oswald',
    fontSize:16,
    marginStart:10,
  },backgroundStyle:{
    backgroundColor:'rgba(204,114,69,.78)',
    flexDirection:'row',
    marginHorizontal:25,
    height:34,
    alignItems:'center',
    borderRadius:20,
    marginBottom:10,
  },iconStyle:{
    marginHorizontal:5,
    fontSize:20,
    textDecorationColor: 'yellow',
    textShadowColor: 'red',
    textShadowRadius: 12,
    marginEnd:3,
    position:'absolute',
    right:5,
  },starText:{
    fontSize:17,
    color:'yellow',
    textDecorationColor: 'yellow',
    textShadowColor: 'red',
    textShadowRadius: 11,
    marginEnd:3,
    position:'absolute',
    right:30,
  }
})