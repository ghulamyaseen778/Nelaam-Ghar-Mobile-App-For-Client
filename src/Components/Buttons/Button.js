import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '@rneui/base'

const Button = ({value,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
        <View style={styles.Button}>
            <Text style={styles.ButtonText}>
                {value}
            </Text>
        </View>
        </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:10
    },
    Button:{
        width:"90%",
        backgroundColor:"#00bb78",
        alignItems:"center",
        borderRadius:6
    },
    ButtonText:{
        color:"white",
        fontSize:20,
        padding:10,
        fontWeight:900
    }
})