import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
 import Home from './assets/src/paginas/Home';
 import BuscaCep from './assets/src/paginas/BuscaCep';
 import BuscarRastreio from './assets/src/paginas/BuscarRastreio';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BuscaCep" component={BuscaCep} />
        <Stack.Screen name="BuscarRastreio" component={BuscarRastreio} />
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
