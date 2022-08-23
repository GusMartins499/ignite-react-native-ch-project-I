import { Image, Text, View } from 'react-native'
import Clipboard from '../../../../assets/clipboard.png'

import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} />
      <Text style={styles.title}>Você ainda não tem terefas cadastradas</Text>
      <Text style={styles.subTitle}>Crie tarefas e organize suas itens a fazer</Text>
    </View>
  )
}