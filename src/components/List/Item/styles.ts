import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#F2F2F2',
  },
  textDone: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#808080',
    textDecorationLine: 'line-through'
  }
})