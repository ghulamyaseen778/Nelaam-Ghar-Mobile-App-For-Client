import {StyleSheet, Text, View,ScrollView} from 'react-native';
import React from 'react';
import Row from '../../../Components/Grid/Row';
import Col from '../../../Components/Grid/Col';
import ProductCard from '../../../Components/ProductCard';

const MyOrders = () => {
  return (
    <ScrollView >
     <Row>
     <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Order accepted"
          />
        </Col>
     </View>
      </Row>
     <Row>
     <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Order accepted"
          />
        </Col>
     </View>
      </Row>
     <Row>
     <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Order accepted"
          />
        </Col>
     </View>
      </Row>
     <Row>
     <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Order accepted"
          />
        </Col>
     </View>
      </Row>
    </ScrollView>
  )
}

export default MyOrders

const styles = StyleSheet.create({})