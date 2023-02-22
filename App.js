import {StyleSheet, View, AppState, ToastAndroid} from 'react-native';
import {useEffect, useState} from "react";
import {getTodos} from "./src/api/todos-mock";
import {getUsers} from "./src/api/users-mock";
import {Todos} from "./src/components/todos/todos";
import {AddTodo} from "./src/components/todos/add-todo";

export default function App() {
  const defaultUserId = 1
  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])
  const [appState, setAppState] = useState(AppState.currentState)

  useEffect(() => {
    getTodos().then(setTodos)
    getUsers().then(setUsers)
  }, [])

  const handleAddTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title, userId: defaultUserId }])
  }

  const _handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      ToastAndroid.show('App resumed');
    }
    setAppState(nextAppState)
  }


  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange)
  }, [])

  return (
    <View style={styles.container}>
      <Todos todos={todos} users={users}/>
      <AddTodo handleAdd={handleAddTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'grid',
    gridTemplateRows: '1fr 150px'
  },
});
