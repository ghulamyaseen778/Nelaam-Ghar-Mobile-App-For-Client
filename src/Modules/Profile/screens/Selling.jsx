import {StyleSheet, Text, View,ScrollView} from 'react-native';
import React from 'react';
import Row from '../../../Components/Grid/Row';
import Col from '../../../Components/Grid/Col';
import ProductCard from '../../../Components/ProductCard';

const SellingCmp = () => {
  return (
    <ScrollView>
      <Row>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Delete"
            btnColor="red"
          />
        </Col>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Delete"
            btnColor="red"
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Delete"
            btnColor="red"
          />
        </Col>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Delete"
            btnColor="red"
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Delete"
            btnColor="red"
          />
        </Col>
        <Col numRows={2}>
          <ProductCard
            BidBtn={true}
            Title="Apple Airpods 3"
            imgSource={require('../../../Assets/Images/img-2.jpg')}
            price="50,000"
            text="Delete"
            btnColor="red"
          />
        </Col>
      </Row>
    </ScrollView>
  );
};

export default SellingCmp;

const styles = StyleSheet.create({});
