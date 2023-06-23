import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useState } from 'react';
import Input from '../../../Components/TextInputs/Input';
import Row from '../../../Components/Grid/Row';
import Col from '../../../Components/Grid/Col';
import ProductCard from '../../../Components/ProductCard';
import Modal from '../../../Components/Modal';
import { useNavigation } from '@react-navigation/native';

const Biding = () => {
  const [modalObj,setModalObj] = useState({bool:false})
  const BidNow = (index)=>{
    setModalObj({index:index,bool:true})
  }
  const BidNowClose = ()=>{
    setModalObj({bool:false})
  }
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.con}>
        <Input
          placeholder={'Search Product'}
          IconSide={'right'}
          Icon={'search'}
          Size={20}
          touchAble={true}
        />
      </View>
      <ScrollView style={styles.app}>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
        </Row>
      </ScrollView>
      <Modal obj={modalObj} onPress={BidNowClose}/>
    </>
  );
};

export default Biding;

const styles = StyleSheet.create({
  con: {
    backgroundColor: 'white',
    marginBottom: 10,
    paddingBottom: 10,
    elevation: 5,
  },
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: '100%',
  },
});
