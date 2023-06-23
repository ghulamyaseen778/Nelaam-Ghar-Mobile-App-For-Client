import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Iconc from 'react-native-vector-icons/FontAwesome';

const Input = ({
  placeholder,
  Icon,
  Size,
  Color,
  secureTextEntry,
  keyboardType,
  onChangeText,
  onBlur,
  onFocus,
  IconSide,
  touchAble,
  multiline,
  numberOfLines,
  TextColor,
  width
}) => {
  return (
    <View style={styles.con}>
      <View
        style={[
          styles.con2,
          {flexDirection: IconSide == 'right' ? 'row-reverse' : 'row'},
        ]}>
        {touchAble ? (
          <TouchableOpacity style={styles.con3}>
            <View >
              <Iconc name={Icon} size={Size} color={Color} />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.con3}>
            <Iconc name={Icon} size={Size} color={Color} />
          </View>
        )}
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={[styles.In,{ color: TextColor||'#00bb78'}]}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          multiline={multiline||false}
          numberOfLines={numberOfLines}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  In: {
    width: '90%',
    fontSize: 18,
    textAlignVertical: 'top',
  },
  con: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  con2: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 6,
    paddingHorizontal: 10,
    // borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 9,
  },
  con3: {
    width: '10%',
  },
});
