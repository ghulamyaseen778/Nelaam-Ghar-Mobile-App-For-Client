import {StyleSheet, ScrollView, View, Text, Dimensions} from 'react-native';
import React, { useState } from 'react';
import Input from '../../../Components/TextInputs/Input';
import ProductCard from '../../../Components/ProductCard';
import Col from '../../../Components/Grid/Col';
import Row from '../../../Components/Grid/Row';
import Modal from '../../../Components/Modal';
import SingleProduct from '../../SingleProduct'; 
import { useNavigation } from '@react-navigation/native';

const Buying = () => {
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
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={false}
              Title="Apple Airpods 3"
              imgSource={require('../../../Assets/Images/img-2.jpg')}
              price="50,000"
              singleOnPress={()=>{
                navigation.navigate("SINGLE_PRODUCT")
              }}
            />
          </Col>
        </Row>
      </ScrollView>
    </>
  );
};

export default Buying;

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
