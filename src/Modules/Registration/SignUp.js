import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../../Components/TextInputs/Input';
import Button from '../../Components/Buttons/Button';
import {color} from '@rneui/base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [confirmInput, setConfirmInput] = useState('');
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Center}>
          <Text style={styles.HeadingColor}>Create Account</Text>
          <Text style={styles.Text}>Create a new account</Text>
        </View>
        <View style={styles.SubContainer}>
          <Input
            placeholder="NAME"
            Icon={'user'}
            Size={30}
            Color={nameInput == '' ? '#d6d6d6' : '#00bb78'}
            onChangeText={e => setEmailInput(e)}
          />
          <Input
            placeholder="EMAIL"
            Icon={'envelope'}
            Size={25}
            Color={emailInput == '' ? '#d6d6d6' : '#00bb78'}
            keyboardType="email-address"
            onChangeText={e => setEmailInput(e)}
          />
          <Input
            placeholder="PHONE"
            Icon={'mobile-phone'}
            Size={40}
            Color={phoneInput == '' ? '#d6d6d6' : '#00bb78'}
            onChangeText={e => setPasswordInput(e)}
            keyboardType="numeric"
          />
          <Input
            placeholder="PASSWORD"
            Icon={'lock'}
            Size={30}
            Color={passwordInput == '' ? '#d6d6d6' : '#00bb78'}
            secureTextEntry={true}
            onChangeText={e => setPasswordInput(e)}
          />
          <Input
            placeholder="CONFIRM PASSWORD"
            Icon={'lock'}
            Size={30}
            Color={confirmInput == '' ? '#d6d6d6' : '#00bb78'}
            secureTextEntry={true}
            onChangeText={e => setPasswordInput(e)}
          />
        </View>
        <Button value={'SignUp'} onPress={()=>navigation.navigate("LAYOUT")} />
        <View style={[styles.Center, {marginTop: 10}]}>
          <TouchableOpacity
          onPress={()=>navigation.navigate("LOGIN")}
          >
          <Text style={[styles.Text2]}>
            Already have a account?
              <Text style={styles.Text3}> Login</Text>
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Center: {
    alignItems: 'center',
  },
  SubContainer: {
    width: '100%',
  },
  SubContainer2: {
    width: '90%',
    alignItems: 'flex-end',
  },
  Image: {
    borderWidth: 10,
    borderColor: '#d6d6d6',
    borderRadius: 110,
    tintColor: '#d6d6d6',
    width: 160,
    height: 160,
  },
  HeadingColor: {
    color: '#073221',
    fontWeight: 800,
    fontSize: 40,
  },
  Text: {
    color: '#00bb78',
    fontSize: 20,
    fontWeight: 500,
  },
  Text2: {
    color: '#555555',
    fontSize: 16,
    fontWeight: 500,
  },
  Text3: {
    color: '#00bb78',
    fontSize: 16,
    fontWeight: 500,
  },
});
