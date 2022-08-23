import { Text, TouchableOpacity, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

import { styles } from "./styles"

interface IItem {
  todo: string
  done: boolean
  onDone: () => void
  onDelete: () => void
}

export function Item({ todo, done, onDone, onDelete }: IItem) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDone}>
        <FontAwesome
          name={done ? 'check-circle' : "circle-o"}
          size={24}
          color={done ? "#5E60CE" : "#4EA8DE"}
        />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Text style={done ? styles.textDone : styles.text}>{todo}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <FontAwesome
          name="trash-o"
          size={24}
          color="#E25858"
        />
      </TouchableOpacity>
    </View>
  )
}