import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import React, {useState} from 'react'
import Header from './components/header';
import TodoItem from './components/todoItem';
export default function App() {
  const [todos, setTodos]=useState([
    {text:"Buy Coffee", key:'1'},
    {text:"Create an App", key:'2'},
    {text:"Play on the Switch", key:'3'}
  ])
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      {/**To form */}
      <View style={styles.list}>
       <FlatList 
         data={todos}
         renderItem={({item})=>(
          <TodoItem item={item}/>
         )}
       />
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
  },
  content:{
      padding:40,

  },
   list:{
      marginTop:20,
   }
});
