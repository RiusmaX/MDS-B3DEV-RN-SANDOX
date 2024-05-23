import { Button, Text, View } from 'react-native'
import styles from '../styles/HomeScreenStyle'
import { Camera, CameraType } from 'react-native-camera-kit'

function HomeScreen ({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Camera
        cameraType={CameraType.Back} // front/back(default)
        flashMode='auto'
      />
      <Text>HOME SCREEN</Text>
      <Button
        title='Go to profile'
        onPress={handlePress}
      />
    </View>
  )
}

export default HomeScreen
