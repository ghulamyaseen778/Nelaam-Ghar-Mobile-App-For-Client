import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import IconA from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <>
      <View >
        <View style={styles.container}>
          <IconA
            name="menufold"
            size={25}
            color={'white'}
            style={styles.image}
          />
          <View>
            <Image
              source={require('../../Assets/Images/welcomelogo.png')}
              style={{resizeMode: 'contain', width: 130}}
            />
          </View>
          <View style={{position: 'relative'}}>
            <Text style={styles.Badge}>10</Text>
            <Icon
              name="md-notifications-outline"
              size={25}
              color={'white'}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#00bb78',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    bottom: -6,
  },
  Badge: {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: 'red',
    position: 'absolute',
    top: 10,
    left: 15,
    zIndex: 1,
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
  },
});
