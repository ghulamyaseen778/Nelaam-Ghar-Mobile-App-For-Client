import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Iconc from 'react-native-vector-icons/Feather';

const Profile = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.profileColumn}>
        <Image
          style={styles.Image}
          source={require('../../../Assets/Images/User-Img.png')}
        />
        <View style={styles.subConatiner}>
          <Text style={styles.Heading}>Ghulam yaseen</Text>
          <TouchableOpacity>
            <Text style={styles.subHeading}>Veiw and edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:30}}>
      <TouchableOpacity style={styles.Column} onPress={()=>{
        navigation.navigate("Selling")
      }}>
        <Text style={styles.ColumnHeading}>Selling</Text>
        <Iconc name="chevron-right" size={30} color="#00bb78" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Column} onPress={()=>{
        navigation.navigate("Biding")
      }}>
        <Text style={styles.ColumnHeading}>My Bids</Text>
        <Iconc name="chevron-right" size={30} color="#00bb78" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Column} onPress={()=>{
        navigation.navigate("MyOrders")
      }}>
        <Text style={styles.ColumnHeading}>My Orders</Text>
        <Iconc name="chevron-right" size={30} color="#00bb78" />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 30,
  },
  subConatiner: {
    marginLeft: 20,
  },
  Image: {
    borderWidth: 10,
    borderColor: '#d6d6d6',
    borderRadius: 50,
    tintColor: '#d6d6d6',
    width: 100,
    height: 100,
  },
  profileColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 22,
    fontWeight: 800,
    textTransform: 'uppercase',
    color: 'black',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
    textDecorationLine: 'underline',
  },
  ColumnHeading: {
    fontSize: 26,
    fontWeight: 700,
    color: 'black',
  },
  Column: {
    paddingHorizontal: 30,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:70,
    borderBottomWidth:1
  },
});
