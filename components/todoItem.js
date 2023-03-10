import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
export default function TodoItem({ item, pressHandler }){
    return (
        <TouchableOpacity onPress={()=>{pressHandler(item.key)}}>
        <View style={styles.item}>
         <Text style={styles.text}>{item.text}</Text>
        <MaterialIcons name='delete' size={18} color='#333' />
          </View>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
  item:{
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    flexDirection:'row',

  },
   text:{
      marginLeft:10,
      marginRight:10,
   }
})
