import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreens from './screens/LoginScreens';
import RegisterScreens from './screens/RegisterScreens';
const Stack = createNativeStackNavigator();

const ScreenOptions = {
  headerStyle:{ backgroundColor: "white"},
  headerTitleStyle: {color:"black"},
  headerTintColor:"black"
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
         <Stack.Screen name='Login' component={LoginScreens}/>  
           <Stack.Screen name='Register' component={RegisterScreens}/>
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
