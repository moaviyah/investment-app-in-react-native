import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Profile from './Profile';
import Tab_navigator from './Tab_navigator';


const Dashboard = ({navigation}) => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
            {/* <Drawer.Screen name="Home" component={Tab_navigator} options={{headerTransparent:true, headerTitle:''}}/>
            <Drawer.Screen name="Profile" component={Profile} options={{headerTransparent:true, headerTitle:''}}/> */}
        </Drawer.Navigator>
    )
}

export default Dashboard

const styles = StyleSheet.create({})