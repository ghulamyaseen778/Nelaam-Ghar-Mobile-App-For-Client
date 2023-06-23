import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/Modules/Registration/Login';
import SignUp from './src/Modules/Registration/SignUp';
import LayOut from './Navigation';
import { Provider } from 'react-redux';
import { store } from './Store';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="LOGIN"
        screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}>
        <Tab.Screen name="LOGIN" component={Login} />
        <Tab.Screen name="SIGN_UP" component={SignUp} />
        <Tab.Screen name="LAYOUT" component={LayOut} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
