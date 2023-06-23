import {StyleSheet, Text, View,ScrollView, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Input from '../../Components/TextInputs/Input';
import Button from '../../Components/Buttons/Button';
import Iconc from 'react-native-vector-icons/AntDesign';

const Uploading = () => {
  return (
    <ScrollView style={{marginTop:20,marginBottom:70}}>
      <Text style={styles.UploadHeading}>Create Product</Text>
      <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
      <TouchableOpacity style={styles.ImageBox}>
        <Iconc name='pluscircleo' size={30} color="black"/>
        <Text style={{fontSize:22,marginLeft:10,color:"black",fontWeight:700}}>Add images</Text>
      </TouchableOpacity>
      </View>
      <View>
      <Input placeholder="Name" IconSide="right" TextColor="black" />
        <Input
          placeholder="Description"
          IconSide="right"
          multiline={true}
          TextColor="black"
          numberOfLines={5}
        />
        <Input placeholder="Price" IconSide="right" TextColor="black" />
        <Input placeholder="Type" IconSide="right" TextColor="black" />
      </View>
      <Button value="Submit"/>
    </ScrollView>
  );
};

export default Uploading;

const styles = StyleSheet.create({
  UploadHeading: {
    fontSize: 30,
    fontWeight: 800,
    textAlign: 'center',
    color:"#00bb78"
  },
  ImageBox:{
    width:"90%",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    height:140,
    borderRadius:10,
    elevation:5,
    justifyContent:"center",
  }
});
