import { TouchableOpacity, View } from 'react-native'
import { Camera, CameraType } from 'react-native-camera-kit'
import styles from '../../styles/CameraStyle'
import { useRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function CustomCamera () {
  const cameraRef = useRef(null)

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const image = await cameraRef.current.capture()
      console.log(image)
    }
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        cameraType={CameraType.Front} // front/back(default)
        style={styles.camera}
        zoomMode='on'
      />
      <TouchableOpacity onPress={handleTakePicture} style={styles.button}>
        <Icon name='camera' size={30} color='black' />
      </TouchableOpacity>
    </View>
  )
}

export default CustomCamera
