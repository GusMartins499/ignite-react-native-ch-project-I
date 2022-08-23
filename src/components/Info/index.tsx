import { Text, View } from 'react-native'

import { styles } from './styles'

interface IInfo {
  amountDone: number
  amountCreated: number
}

export function Info({ amountDone, amountCreated }: IInfo) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.textInfo}>Criadas</Text>
        <View style={styles.wrapperAmount}>
          <Text style={styles.amount}>{amountCreated}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={[styles.textInfo, { color: '#8284FA' }]}>Concluídas</Text>
        <View style={styles.wrapperAmount}>
          <Text style={styles.amount}>{amountDone}</Text>
        </View>
      </View>
    </View>
  )
}