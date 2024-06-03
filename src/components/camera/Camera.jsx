import { TouchableOpacity, View } from 'react-native'
import { Camera, CameraType } from 'react-native-camera-kit'
import styles from '../../styles/CameraStyle'
import { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getBase64FromImage } from '../../utils/Images'
import { identifyImage } from '../../services/ClarifaiApi'
import { Spinner } from '@ui-kitten/components'

function CustomCamera ({ onResult }) {
  const cameraRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTakePicture = async () => {
    setIsLoading(true)
    if (cameraRef.current) {
      const image = await cameraRef.current.capture()
      if (image) {
        const base64 = await getBase64FromImage(image.uri)
        const res = await identifyImage(base64)
        onResult && onResult(res)
      }
      console.log(image)
    }
    setIsLoading(false)
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        cameraType={CameraType.Back} // front/back(default)
        style={styles.camera}
        zoomMode='on'
      />
      <TouchableOpacity onPress={handleTakePicture} style={styles.button} disabled={isLoading}>
        {
          isLoading
            ? <Spinner size='large' />
            : <Icon name='camera' size={30} color='black' />
        }
      </TouchableOpacity>
    </View>
  )
}

export default CustomCamera
