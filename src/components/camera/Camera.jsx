import { TouchableOpacity, View } from 'react-native'
import { Camera, CameraType } from 'react-native-camera-kit'
import styles from '../../styles/CameraStyle'
import { useRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getBase64FromImage } from '../../utils/Images'
import { identifyImage } from '../../services/ClarifaiApi'

function CustomCamera () {
  const cameraRef = useRef(null)

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const image = await cameraRef.current.capture()
      if (image) {
        const base64 = await getBase64FromImage(image.uri)
        const res = await identifyImage(base64)
        // console.log(res)
      }
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
