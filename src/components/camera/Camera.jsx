import { View } from 'react-native'
import { Camera, CameraType } from 'react-native-camera-kit'
import styles from '../../styles/CameraStyle'

function CustomCamera () {
  return (
    <View style={styles.container}>
      <Camera
        cameraType={CameraType.Back} // front/back(default)
        style={styles.camera}
      />
    </View>
  )
}

export default CustomCamera
