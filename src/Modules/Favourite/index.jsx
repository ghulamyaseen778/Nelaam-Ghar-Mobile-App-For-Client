import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Modal from '../../Components/Modal'
import Row from '../../Components/Grid/Row'
import Col from '../../Components/Grid/Col'
import ProductCard from '../../Components/ProductCard'

const Favourite = () => {
  const [modalObj,setModalObj] = useState({bool:false})
  const BidNow = (index)=>{
    setModalObj({index:index,bool:true})
  }
  const BidNowClose = ()=>{
    setModalObj({bool:false})
  }
  return (
    <>
    <ScrollView style={styles.app}>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
          <Col numRows={2}>
            <ProductCard
              BidBtn={true}
              Title="Apple Airpods 3"
              imgSource={require('../../Assets/Images/img-2.jpg')}
              price="50,000"
              onPress={()=>BidNow(1)}
              text="Bid Now"
              isIcon={true}
            />
          </Col>
        </Row>
      </ScrollView>
      <Modal obj={modalObj} onPress={BidNowClose}/>
      </>
  )
}

export default Favourite

const styles = StyleSheet.create({
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: '100%',
  },
})