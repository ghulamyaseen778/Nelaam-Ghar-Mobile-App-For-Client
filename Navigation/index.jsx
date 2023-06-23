import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useState} from 'react';
import Home from '../src/Modules/Home';
import Favourite from '../src/Modules/Favourite';
import Chat from '../src/Modules/Chat';
import Iconc from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import Uploading from '../src/Modules/Uploading';
import ProfileNav from '../src/Modules/Profile';
import {useNavigation,useRoute} from '@react-navigation/native';
import SingleProduct from '../src/Modules/SingleProduct';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const LayOut = () => {
  const navigation = useNavigation();
  const [route,setRoute] = useState("HOME")
  const r = useRoute()
  console.log(r)
  return (
    <>
      <View
        style={{
          backgroundColor: '#f5fffb',
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          height: 70,
          elevation: 5,
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          zIndex: 10,
          width: '100%',
          justifyContent: 'space-around',
          paddingTop: 10,
        }}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {
            navigation.navigate('HOME');
            setRoute('HOME')
          }}>
          <Iconc
            name={route=="HOME" ? 'home' : 'home-outline'}
            color={route=="HOME" ? '#00bb78' : '#adacac'}
            size={20}
          />
          <Text
            style={{
              color: route=="HOME" ? '#00bb78' : '#adacac',
              fontSize: 12,
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {
            navigation.navigate('FAVOURITE');
            setRoute('FAVOURITE');
          }}>
          <IconM
            name={route=="FAVOURITE" ? 'favorite' : "favorite-outline"}
            color={route=="FAVOURITE" ? '#00bb78' : '#adacac'}
            size={20}
          />
          <Text
            style={{
              color: route=="FAVOURITE" ? '#00bb78' : '#adacac',
              fontSize: 12,
            }}>
            FAVOURITE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UPLOADING');
            setRoute('UPLOADING')
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#00bb78',
              top: -25,
            }}>
            <IconA name="plus" color="white" size={40} />
          </View>
        </TouchableOpacity >
        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {
            navigation.navigate('CHAT');
            setRoute('CHAT')
          }}>
          <Iconc
            name={route=="CHAT" ? 'chatbubble' : 'chatbubble-outline'}
            color={route=="CHAT" ? '#00bb78' : '#adacac'}
            size={20}
          />
          <Text
            style={{
              color: route=="CHAT" ? '#00bb78' : '#adacac',
              fontSize: 12,
            }}>
            CHAT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {
            navigation.navigate('PROFILE');
            setRoute('PROFILE')
          }}>
          <IconF
            name={route=="PROFILE" ? 'user' : 'user-o'}
            color={route=="PROFILE" ? '#00bb78' : '#adacac'}
            size={20}
          />
          <Text
            style={{
              color: route=="PROFILE" ? '#00bb78' : '#adacac',
              fontSize: 12,
            }}>
            PROFILE
          </Text>
        </TouchableOpacity>
      </View>
      <Drawer.Navigator
        initialRouteName="HOME"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="HOME" component={Home} />
        <Drawer.Screen name="FAVOURITE" component={Favourite} />
        <Drawer.Screen name="UPLOADING" component={Uploading} />
        <Drawer.Screen name="CHAT" component={Chat} />
        <Drawer.Screen name="PROFILE" component={ProfileNav} />
        <Drawer.Screen name="SINGLE_PRODUCT" component={SingleProduct} />
      </Drawer.Navigator>
      {/* <SingleProduct/> */}
    </>
  );
};

export default LayOut;

const styles = StyleSheet.create({});
