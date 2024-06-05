import { View } from 'react-native'
import { Camera, CameraType } from 'react-native-camera-kit'
import styles from '../../styles/CameraStyle'
import { useRef, useState } from 'react'
import ActionsButtons from './ActionsButtons'

function CustomCamera ({ onResult, navigation }) {
  const cameraRef = useRef(null)
  const [torchEnabled, setTorchEnabled] = useState(false)
  const [cameraType, setCameraType] = useState(CameraType.Back) // [Back, Front
  const [isLoading, setIsLoading] = useState(false)

  const handleTakePicture = async () => {
    setIsLoading(true)
    if (cameraRef.current) {
      const image = await cameraRef.current.capture()
      if (image) {
        navigation.navigate('Picture', { image })
      }
    }
    setIsLoading(false)
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        cameraType={cameraType} // front/back(default)
        style={styles.camera}
        torchMode={torchEnabled ? 'on' : 'off'}
      />
      <ActionsButtons
        handleTakePicture={handleTakePicture}
        isLoading={isLoading}
        torchEnabled={torchEnabled}
        setTorchEnabled={setTorchEnabled}
        cameraType={cameraType}
        setCameraType={setCameraType}
      />
    </View>
  )
}

export default CustomCamera
