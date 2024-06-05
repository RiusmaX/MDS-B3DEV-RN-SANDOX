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
  actionButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    zIndex: 50,
    bottom: 20
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 50,
    elevation: 10,
    padding: 20
  }
})
