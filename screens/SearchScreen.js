import { StyleSheet, Text, View,TextInput,ScrollView} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


export default function SearchScreen() {
  const [searchApi,results,errorMessage] = useResults();
  const [term, setTerm] = useState('')
  //console.log(results);
  const filterResultsByPrice = (price)=>{
    return results.filter((result)=>{
      return result.price === price
    });

  };
  return (
   <View>
    <ScrollView>
    <SearchBar
    term={term}
    onTermChange={setTerm}
    onTermSubmit={()=>searchApi(term)}
    />
    {errorMessage ? <Text>{errorMessage} </Text>:null}
    {results.length == 0 ? (
      <></>
    ):(
      <>
       <ResultsList style={styles.title} 
      title='Fiyat Ortalaması : <₺>' 
      results={filterResultsByPrice('₺')}/>
      <ResultsList 
      title='Fiyat Ortalaması : <₺₺>' 
      results={filterResultsByPrice('₺₺')}/>
      <ResultsList 
      title='Fiyat Ortalaması : <₺₺₺>' 
      results={filterResultsByPrice('₺₺₺')}/>
      </>
    )}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    marginStart:40,
    fontSize:20,
  }
}
);