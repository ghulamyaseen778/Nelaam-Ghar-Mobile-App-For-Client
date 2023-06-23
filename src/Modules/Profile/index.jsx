import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens';
import Selling from './screens/Selling';
import Biding from './screens/Biding';
import MyOrders from './screens/MyOrders';
import BidingCmp from './screens/Biding';
import SellingCmp from './screens/Selling';

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator initialRouteName='Profile' >
    <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    <Stack.Screen name="Selling" component={SellingCmp} options={{headerTitle:"Selling"}} />
    <Stack.Screen name="Biding" component={BidingCmp} options={{headerTitle:"Biding"}}/>
    <Stack.Screen name="MyOrders" component={MyOrders} options={{headerTitle:"My Orders"}} />
  </Stack.Navigator>
  )
}

export default ProfileNav

const styles = StyleSheet.create({})