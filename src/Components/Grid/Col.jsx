import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Col = ({numRows, children}) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

export default Col;

const styles = StyleSheet.create({
  '2col': {
    flex: 2,
  },
});
