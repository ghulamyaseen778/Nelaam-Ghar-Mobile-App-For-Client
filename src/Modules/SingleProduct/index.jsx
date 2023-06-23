import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Iconc from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Row from '../../Components/Grid/Row';
import Col from '../../Components/Grid/Col';
import Button from '../../Components/Buttons/Button';
import {useNavigation,useRoute} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SingleProduct = ({page}) => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bool, setBool] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          onScroll={e => {
            const y = e.nativeEvent.contentOffset.y;
            // console.log(typeof y)
            if (y <= 190) {
              setBool(false);
              // console.log(bool);
            } else if (y >= 193) {
              setBool(true);
              // console.log('yes');
            }
          }}>
          <View style={styles.con}>
            <View>
              <FlatList
                data={[1, 2, 3, 4]}
                horizontal
                pagingEnabled
                onScroll={e => {
                  const x = e.nativeEvent.contentOffset.x;
                  setCurrentIndex(Number((x / SCREEN_WIDTH).toFixed(0)));
                }}
                renderItem={({item, index}) => {
                  return (
                    <View style={{width: SCREEN_WIDTH, height: 280}}>
                      <Image
                        style={{
                          width: SCREEN_WIDTH,
                          height: 280,
                          resizeMode: 'cover',
                        }}
                        source={require('../../Assets/Images/img-2.jpg')}
                      />
                    </View>
                  );
                }}
              />
            </View>

            <View style={styles.tag1}>
              <Text>{currentIndex + 1}/4</Text>
            </View>
          </View>
          <View style={styles.productVeiw}>
            <Text style={styles.productPrice}>Rs 50,000</Text>
            <Text style={styles.productText}>
              Apple airpods 3 in new quality
            </Text>
            <View style={styles.productMiddle}>
              <Text style={styles.productDate}>19/05/2023</Text>
              <TouchableOpacity
                style={styles.productFavourite}
                onPress={() => setIsFavourite(!isFavourite)}>
                <IconM
                  name={isFavourite ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={isFavourite ? '#00bb78' : 'black'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productHeading}>Details:</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 18, color: 'black'}}>Type:</Text>
              <Text style={[styles.productHeading, {marginLeft: 50}]}>
                Airpods
              </Text>
            </View>
          </View>
          <View style={styles.productDescription}>
            <Text style={styles.productHeading}>Description:</Text>
            <Text style={styles.productPara}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              a unde provident quis fugiat, illum nemo dolorem, quibusdam hic
              beatae aperiam accusamus saepe vero recusandae odio doloribus,
              nesciunt dignissimos architecto repellat harum vel minus. Magnam
              repellendus deserunt vitae quia exercitationem consequatur neque
              vel beatae provident, voluptate consectetur inventore deleniti.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique dicta facere nihil ut eum atque totam soluta minima,
              ipsa nemo quia, magni voluptatem culpa ab illo quasi. Repudiandae,
              pariatur deserunt?
            </Text>
          </View>
        </ScrollView>
        <View
          style={[
            styles.tag2,
            {backgroundColor: bool ? 'white' : 'transparent'},
          ]}>
          <TouchableOpacity style={styles.tag2Inner}  onPress={()=>navigation.goBack()}>
            <Iconc name="arrow-left" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.productBottom}>
          <Row>
            <Col numRows={2}>
              <Button value="Buy Now" />
            </Col>
            <Col numRows={2}>
              <Button value="Chat" />
            </Col>
          </Row>
        </View>
      </View>
    </>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    zIndex: 20,
    position: 'absolute',
    backgroundColor: 'white',
    paddingBottom: 70,
  },
  con: {
    position: 'relative',
  },
  tag1: {
    position: 'absolute',
    zIndex: 3,
    backgroundColor: 'white',
    width: 40,
    height: 20,
    borderRadius: 8,
    alignItems: 'center',
    bottom: 10,
    right: 10,
  },
  tag2: {
    position: 'absolute',
    zIndex: 3,
    top: 10,
    left: 10,
    width: '100%',
  },
  tag2Inner: {
    backgroundColor: 'rgba(10,10,10,0.3)',
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  productVeiw: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  productPrice: {
    fontSize: 26,
    fontWeight: 700,
    color: 'black',
    fontFamily: 'sans-serif-condensed',
  },
  productText: {
    fontSize: 18,
    fontWeight: 700,
    color: 'black',
    fontFamily: 'sans-serif-condensed',
  },
  productBottom: {
    width: SCREEN_WIDTH,
    height: 70,
    backgroundColor: '#f5fffb',
    // borderTopStartRadius: 30,
    // borderTopEndRadius: 30,
    position: 'absolute',
    zIndex:30,
    elevation: 5,
    borderTopWidth: 0.3,
    borderTopColor: 'gray',
    bottom:0
  },
  productMiddle: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productDate: {
    fontSize: 16,
    color: 'black',
  },
  productDetails: {
    backgroundColor: '#ebebeb',
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  productHeading: {
    fontSize: 18,
    fontWeight: 700,
    color: 'black',
  },
  productDescription: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
