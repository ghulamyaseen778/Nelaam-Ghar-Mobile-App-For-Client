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

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Center}>
          <Image
            style={styles.Image}
            source={require('../../Assets/Images/User-Img.png')}
          />
          <Text style={styles.HeadingColor}>Welcome Back</Text>
          <Text style={styles.Text}>Sign to continue</Text>
        </View>
        <View style={styles.SubContainer}>
          <Input
            placeholder="EMAIL"
            Icon={'envelope'}
            Size={25}
            Color={emailInput == '' ? '#d6d6d6' : '#00bb78'}
            keyboardType="email-address"
            onChangeText={e => setEmailInput(e)}
          />
          <Input
            placeholder="PASSWORD"
            Icon={'lock'}
            Size={30}
            Color={passwordInput == '' ? '#d6d6d6' : '#00bb78'}
            secureTextEntry={true}
            onChangeText={e => setPasswordInput(e)}
          />
          <View style={[styles.SubContainer, styles.Center]}>
            <View style={styles.SubContainer2}>
              <TouchableOpacity>
                <Text style={styles.ForgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button value={'Login'} onPress={()=>navigation.navigate("SIGN_UP")} />
        <View style={[styles.Center, {marginTop: 10}]}>
          <TouchableOpacity
          onPress={()=>navigation.navigate("SIGN_UP")}
          >
          <Text style={[styles.Text2]}>
            Don't Have account? 
              <Text style={styles.Text3}> create new account</Text>
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

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
  ForgotText: {
    color: '#00bb78',
    fontSize: 16,
    marginBottom: 10,
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
