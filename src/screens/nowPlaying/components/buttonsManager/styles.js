import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  icon: {
    color: 'white',
    alignSelf: 'center',
    left: 1,
    top: 2
  },

  buttonContainer: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 35,
    marginHorizontal: 30,
    justifyContent: 'center'
  }
})

export default styles;
