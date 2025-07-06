import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
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
    height: '80%',
    backgroundColor: '#000',
    gap: 10
  },
  areaText:{
    width: '100%',
    height: 'auto',
    gap: 10,
  },
  send: {
    color: '#fff',
    marginLeft: '2%',
    fontWeight: '700',
  },
  resIA: {
    color: 'blue',
    marginLeft: '2%',
    fontWeight: '600',
  },
  textEnv: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 16,
  },
});
