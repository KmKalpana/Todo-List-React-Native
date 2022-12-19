import { text } from 'express';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export default function TodoItem({ item }){
    return (
        <TouchableOpacity>
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
  text:{
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
  }
})
