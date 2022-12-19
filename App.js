import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import React, {useState} from 'react'
export default function App() {
  const [people, setPeople]=useState([
    {name:'Km Kalpana', key:'1'},
    {name:'Kavya', key:'2'},
    {name:'Krishi', key:'3'},
    {name:'Km Kalpana', key:'4'},
    {name:'Karishma', key:'5'},
    {name:'Neetue', key:'6'},
    {name:'Kdfd', key:'7'},
    {name:'naming', key:'8'},
    {name:'Daddy', key:'9'},
  ]);
  const pressHandler=(id)=>{
      setPeople((prevPeople) =>{
        return prevPeople.filter(person => person.id!= id)
      });
  }
  return (
    <View style={styles.container}>
     <Text>Hello World</Text>
     <Text>Kalpana Kathait</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:24
  },

});
