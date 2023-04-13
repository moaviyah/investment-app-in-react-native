import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Test from './screens/Test';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Tab_navigator from './screens/Tab_navigator';
import Transactions from './screens/Transactions';
import Account from './screens/Account';

 function App() {
  const [signedIn, setSignedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        setSignedIn(true)
        console.log('user')
      } else {
        setSignedIn(false)
        console.log('not user')
      }
    })
    return unsubscribe
  }, [])

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signedIn
        ?
        <Stack.Group>
            <Stack.Screen name="Navigator" component={Tab_navigator} options={{ headerShown: false }}/>
            
          </Stack.Group>
        :
        <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        </Stack.Group>
      }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
const styles = StyleSheet.create({

});

