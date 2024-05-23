import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width
  },
  camera: {
    height,
    width
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    borderRadius: 50,
    elevation: 10,
    zIndex: 50,
    bottom: 20,
    padding: 20
  }
})
