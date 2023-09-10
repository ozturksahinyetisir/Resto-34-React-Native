import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultShowScreen from './screens/ResultShowScreen';
import * as Font from 'expo-font';


const Stack = createNativeStackNavigator();

async function loadCustomFont() {
  await Font.loadAsync({
    'Oswald': require('./assets/fonts/Oswald-Regular.ttf'),
  });
}

loadCustomFont();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerTitle:'Resto 34'}}>
      <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ResultShow" component={ResultShowScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
