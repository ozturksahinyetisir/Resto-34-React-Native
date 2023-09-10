import { FlatList, StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect,useState} from 'react'
import yelp from '../api/yelp';
import { MaterialIcons } from '@expo/vector-icons';
import {Linking} from 'react-native'

export default function ResultShowScreen({route}) {
    const [result,setResult] = useState(null)
    const id = route.params.id;

    const getResult=async(id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(()=>{
        getResult(id);
    },[]);
    if(!result){
        return null;
    }
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.location.address1}</Text>
      
      <View>{result.phone === "" ? ( // important! if phone number is empty.do not set vector icon.
        null
      ):(
        <View style={styles.container}>
        <MaterialIcons name="delivery-dining" size={24} color="black" />
        <Text
        style={styles.phone}
        onPress={() => {
          if (result.phone) {
          Linking.openURL(`tel:${result.phone}`);
        }
        }}
      >
        {result.phone}
      </Text>
        </View>
      
      )}
        
      
      
      </View>
      <FlatList 
      contentContainerStyle={{ paddingBottom: 105 }}
      data={result.photos}
      renderItem={({item})=>{
        return <Image style={styles.image} source={{uri:item}}/>
      }}

      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'center',
      padding:4,
      marginEnd:10,
    },
    title:{
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        marginTop:15,
    },
    phone:{
        alignSelf:'center',
        fontSize:15,
    },
    image:{
        width:350,
        height:260,
        marginHorizontal:20,
        marginVertical:5,
        borderRadius:15,
        alignSelf:'center'
        
    }
})