import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Transactions from './Transactions'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from './Account';
import Earn from './Earn';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { background } from '../assets/theme/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab_navigator = () => {
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
        />
        <Tab.Screen name='Transactions' component={Transactions} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-wallet" size={size} color={color} />
          ),
        }}
        />
        <Tab.Screen name='Account' component={Account} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
        />
        <Tab.Screen name='Earn' component={Earn} options={{
          headerRight: () => (
            <View style={{ marginRight: windowWidth * 0.05 }}>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </View>
          ),
          headerLeft: () => (
            <View style={{
              marginLeft: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: background,
              borderRadius: 10,
              padding: windowHeight * 0.008
            }}>
              <MaterialIcons name='wallet-giftcard' size={24} />
              <Text>100 coins</Text>
            </View>
          ),
          headerShown: true,
          headerTitle: '',
          headerTransparent: 'true',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-trophy" size={size} color={color} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tab_navigator

const styles = StyleSheet.create({})