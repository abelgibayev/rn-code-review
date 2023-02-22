import {ScrollView, Text, View} from 'react-native'

export const Todos = ({ todos, users }) => {
  return (<View>
    <ScrollView>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} userId={todo.userId} users={users} />
      ))}
    </ScrollView>
  </View>)
}

const Todo = ({ title, userId, users }) => {
  const user = users.find(item => item.id === userId)

  const UserName = () =>
    <Text>
      {user.name}
    </Text>

  return <View>
    <Text>
      {title}
    </Text>
    <UserName />
  </View>
}
