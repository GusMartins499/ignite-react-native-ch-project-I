import { useState } from "react"
import {
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert
} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { Divider } from "../../components/Divider"
import { Info } from "../../components/Info"
import { List } from "../../components/List"

import Logo from '../../../assets/logo.png'
import { styles } from './styles'

interface ITodo {
  todo: string
  done: boolean
}

export function Home() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [currentTodo, setCurrentTodo] = useState({ todo: '', done: false })

  const handleAddTodo = () => {
    if (currentTodo.todo.trim() !== '') {
      setTodos([...todos, currentTodo])
      setCurrentTodo({ todo: '', done: false })
      return
    }
    Alert.alert("ATENÇÃO", "Digite uma tarefa válida")
  }

  const handleTodoDone = (todo: ITodo) => {
    const todoIndex = todos.findIndex((item) => item.todo === todo.todo)
    if (todoIndex === -1) {
      Alert.alert("ATENÇÃO", "Ocorreu um erro")
      return
    }
    const copyTodos = [...todos]
    copyTodos[todoIndex].done = !copyTodos[todoIndex].done
    setTodos(copyTodos)
  }

  const handleTodoDelete = (todo: ITodo) => {
    const todoIndex = todos.findIndex((item) => item.todo === todo.todo)
    if (todoIndex === -1) {
      Alert.alert("ATENÇÃO", "Ocorreu um erro")
      return
    }
    const copyTodos = [...todos]
    copyTodos.splice(todoIndex, 1)
    setTodos(copyTodos)
  }

  const handleConfirmationTodoDelete = (todo: ITodo) => (
    Alert.alert("ATENÇÃO", "Tem certeza que deseja apagar a tarefa ?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Apagar", onPress: () => handleTodoDelete(todo) }
      ])
  )

  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma tarefa"
            placeholderTextColor='#808080'
            selectionColor='#F2F2F2'
            value={currentTodo.todo}
            onChangeText={(text) => setCurrentTodo((prevState) => ({ ...prevState, todo: text }))}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
            <FontAwesome name="plus-circle" size={18} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <Divider />
        <Info
          amountDone={todos.filter((item) => item.done === true).length}
          amountCreated={todos.filter((item) => item.done === false).length}
        />
        <List
          todos={todos}
          callback={handleTodoDone}
          deleteTodo={handleConfirmationTodoDelete}
        />
      </View>
    </View>
  )
}