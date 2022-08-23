import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    padding: 4,
    marginTop: 32
  },
  textInfo: {
    flex: 1,
    fontWeight: 'bold',
    color: '#4EA8DE',
    fontSize: 18,
  },
  wrapperAmount: {
    backgroundColor: '#333333',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    color: '#D9D9D9',
    fontWeight: 'bold'
  }
}) 