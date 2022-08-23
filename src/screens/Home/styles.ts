import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 80,
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1A1A1A',
    marginTop: 56,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -28,
    paddingHorizontal: 16
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 8,
    color: '#FFFF',
    padding: 16,
    fontSize: 18,
    marginRight: 6
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
})