import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../styles/PictureScreenStyle'
import { Spinner } from '@ui-kitten/components'

function PictureActionButtons (

  {
    handleRecognize,
    handleRemoveBackground,
    handleRetakePicture,
    isLoading,
    isRecognizeEnabled
  }

) {
  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity
        onPress={handleRetakePicture}
        style={{ ...styles.button, padding: 15 }}
        disabled={isLoading}
      >
        {isLoading
          ? <Spinner size='large' />
          : <Icon
              name='camera-retake'
              size={20}
              color='black'
            />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleRemoveBackground}
        style={{ ...styles.button }}
        disabled={isLoading}
      >
        {isLoading
          ? <Spinner size='large' />
          : <Icon
              name='checkerboard-remove'
              size={30}
              color='black'
            />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleRecognize}
        style={{ ...styles.button }}
        disabled={isLoading || !isRecognizeEnabled}
      >
        {isLoading
          ? <Spinner size='large' />
          : <Icon
              name='eye-check'
              size={30}
              color='black'
            />}
      </TouchableOpacity>
    </View>
  )
}

export default PictureActionButtons
