import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Keyboard,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import React, {useState} from 'react'
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox'
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Coffee', key: '1' },
    { text: 'Create an App', key: '2' },
    { text: 'Play on the Switch', key: '3' },
  ])
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos]
    })
  }
  return (
   // <Sandbox />
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  content: {
    padding: 40,
    flex:1,
  },
  list: {
    marginTop: 20,
  },
})
