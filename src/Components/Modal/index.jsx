import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../TextInputs/Input';
import Button from '../Buttons/Button';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Modal = ({onPress, obj}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.Conatiner, {display: !obj.bool ? 'none' : 'flex'}]}>
        <View style={styles.con}>
          <View>
            <Image
              source={require('../../Assets/Images/img-2.jpg')}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                }}>
                Apple Airpods 3
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                }}>
                Rs 50,000
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.conText}>Enter Your Bid</Text>
            <Input placeholder="50,000" Icon="dollar" Size={25} />
            <Button value="Submit" />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Modal;

const styles = StyleSheet.create({
  Conatiner: {
    width: '100%',
    height: '100%',
    zIndex: 2,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(10, 10, 10,0.3)',
  },
  con: {
    backgroundColor: 'white',
    width: '80%',
    height: 400,
    borderRadius: 10,
    padding:10
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
    borderRadius:10
  },
  conText: {
    fontSize: 26,
    textAlign: 'center',
    color: '#00bb78',
    fontWeight: 700,
  },
  text: {
    paddingHorizontal: 20,
    marginVertical:10
  },
});
