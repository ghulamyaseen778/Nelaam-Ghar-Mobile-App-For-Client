import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Iconc from 'react-native-vector-icons/MaterialIcons';

const ProductCard = ({
  imgSource,
  BidBtn,
  price,
  Title,
  onPress,
  singleOnPress,
  text,
  btnColor,
  isIcon
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isVisable, setIsVisable] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={singleOnPress} >
        <View style={[styles.productContainer, {height: BidBtn ? 250 : 200}]}>
          <Image style={styles.ProductImage} source={imgSource} />
          <View style={styles.ProductDescription}>
            <View style={styles.productHeading}>
              <Text style={[styles.productHeadingText]}>{Title}</Text>
              <Text style={styles.productPrice}>RS {price}</Text>
            </View>
            <TouchableOpacity
              style={styles.productFavourite}
              onPress={() => setIsFavourite(!isFavourite)}>
              {
                !isIcon?
                <Iconc
                name={isFavourite ? 'favorite' : 'favorite-border'}
                size={20}
                color={isFavourite ? '#00bb78' : 'black'}
              />:
              <Iconc
                name={isFavourite ? 'favorite-border' : 'favorite'}
                size={20}
                color={isFavourite ? "black" : '#00bb78'}
              />
              }
            </TouchableOpacity>
          </View>
          {BidBtn ? (
            <TouchableOpacity
              style={[styles.bidBtn, {backgroundColor: btnColor||"#00bb78"}]}
              onPress={onPress}>
              <Text style={styles.bidBtnText}>{text}</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
    shadowColor: 'black',
    borderRadius: 5,
  },
  ProductImage: {
    resizeMode: 'cover',
    height: 130,
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  ProductDescription: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    height: 70,
  },
  productHeading: {
    width: '90%',
  },
  productHeadingText: {
    fontSize: 15,
    fontWeight: 600,
    color: 'black',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 700,
    color: 'black',
  },
  bidBtn: {
    width: '60%',
    padding: 5,
    borderRadius: 35,
    marginLeft: 10,
  },
  bidBtnText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
  },
});
