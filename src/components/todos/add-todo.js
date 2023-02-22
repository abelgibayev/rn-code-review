import {memo, useRef} from "react";
import {View, TextInput, Button} from "react-native";

export const AddTodo = memo(({ handleAdd }) => {
  const inputRef = useRef(null)

  return <View>
    <TextInput ref={inputRef} />
    <Button onClick={() => {
      handleAdd(inputRef.current.value)
    }}>Create</Button>
  </View>
})
