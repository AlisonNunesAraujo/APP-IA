import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '10%',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '80%',
    height: 'auto',
    backgroundColor: '#fff',
    marginLeft: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: '5%',
  },
  list: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  send: {
    color: '#fff',
    marginLeft: '2%',
    gap: 10,
    fontWeight: 'bold',
  },
  resIA: {
    color: 'blue',
    marginLeft: '2%',
    gap: 10,
    fontWeight: 'bold',
  },
  textEnv: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 16,
  },
});
