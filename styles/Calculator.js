import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  raw: {
    backgroundColor: '#fff',
    height: 20,
    width: 280,
    marginTop: 30
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    height: 50
  },
  buttonItem: {
    marginLeft: 10,
    marginRight: 10,
    width: 80
  },
  buttonRaw: {
    marginTop: 20,
    flexDirection: 'row'
  },
  buttonRawZero: {
    marginTop: 20,
    width: 280,
    marginLeft: 10
  },
  buttonNumberContainer: {
    marginTop: 50
  },
  buttonOperationContainer: {
    marginTop: 30,
    flexDirection: 'row'
  },
  buttonControlContainer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  buttonBack: {
    marginLeft: 10,
    marginRight: 10,
    width: 55
  },
  buttonEqual: {
    marginLeft: 10,
    marginRight: 10,
    width: 205
  },
  buttonOperationItem: {
    marginLeft: 10,
    marginRight: 10,
    width: 55
  }
});

export default styles;