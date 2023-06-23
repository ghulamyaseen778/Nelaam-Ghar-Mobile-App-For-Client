import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Buying from './Screens/Buying';
import Biding from './Screens/Biding';
import Header from '../../Components/Header';
import SingleProduct from '../SingleProduct';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <>
    <Header/>
      <Tab.Navigator
        initialRouteName="Buying"
        screenOptions={{tabBarStyle: {backgroundColor: '#00bb78'}}}>
        <Tab.Screen
          name="Buying"
          component={Buying}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={[{color: focused ? 'white' : '#6d6d6d'}, styles.Tab]}>
                  Buying
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="Biding"
          component={Biding}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text
                  style={[{color: focused ? 'white' : '#6d6d6d'}, styles.Tab]}>
                  Biding
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
      {/* <SingleProduct/> */}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Tab: {
    fontSize: 16,
    fontWeight: 500,
  },
});
